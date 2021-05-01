"use strict";

const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");
const validate = require("../../utils/validation/validation");
const getUserInfoByToken = require("../../utils/getUserInfoByToken");
const { headers } = require("../../utils/headers/headers");

// validation
const rulesName = { required: true, maxLength: 255, minLength: 2 };
const rulesSurname = { required: true, maxLength: 255, minLength: 3 };
const rulesEmail = { required: true, isEmail: true, maxLength: 30 };
const rulesPassword = { required: true, minLength: 6, maxLength: 30 };

const validateArray = (arr) =>
  [...arr].map((el) => {
    const valid = validate(el.value, el.rules);
    if (!valid) {
      return {
        status: false,
        error: el.error,
      };
    } else {
      return {
        status: true,
      };
    }
  });

const comparePasswordWithHash = (password, salt, hash) => {
  let hashedPassword = crypto.scryptSync(password, salt, 64);
  hashedPassword = hashedPassword.toString("hex");

  return hashedPassword === hash;
};

exports.signUp = (req, res) => {
  let body = "";

  req.on("data", (buffer) => {
    body += buffer.toString();
  });

  req.on("end", async () => {
    body = JSON.parse(body);
    // validation
    let validationArray = [
      { value: body.name, error: "Не коректне ім'я", rules: rulesName },
      {
        value: body.surname,
        error: "Не коректне прізвище",
        rules: rulesSurname,
      },
      { value: body.email, error: "Не коректний email", rules: rulesEmail },
      {
        value: body.password,
        error: "Не коректний пароль",
        rules: rulesPassword,
      },
    ];
    validationArray = validateArray(validationArray);
    for (let i = 0; i < validationArray.length; i++) {
      if (!validationArray[i].status) {
        res.writeHead(401, headers);
        return res.end(JSON.stringify({ message: validationArray[i].error }));
      }
    }
    // checking if user with this email exists
    let userExist;
    try {
      userExist = await User.searchByEmail(body.email);
    } catch (e) {
      res.writeHead(400, headers);
      res.end(JSON.stringify({ message: "Cерверна помилка" }));
    }

    if (userExist.rows[0]) {
      // if exists return 400 error
      res.writeHead(400, headers);
      res.end(
        JSON.stringify({
          message: "Користувач з таким email вже зареєстрований",
        })
      );
    } else {
      // if not exists create new one
      const salt = body.email;

      let hashedPassword = crypto.scryptSync(body.password, salt, 64);
      hashedPassword = hashedPassword.toString("hex");
      const newUser = new User({
        name: body.name,
        surname: body.surname,
        email: body.email,
        password: hashedPassword,
      });
      try {
        await newUser.save();
      } catch (e) {
        console.log(e);
        res.writeHead(400, headers);
        res.end(JSON.stringify({ message: "Cерверна помилка" }));
      }
      res.writeHead(200, headers);
      return res.end(
        JSON.stringify({ message: "Ви успішно зареєструвались!" })
      );
    }
  });
};

exports.logIn = (req, res) => {
  let body = "";
  req.on("data", (buffer) => {
    body += buffer.toString();
  });

  req.on("end", async () => {
    body = JSON.parse(body);

    let validationArray = [
      { value: body.email, error: "Не коректний email", rules: rulesEmail },
      {
        value: body.password,
        error: "Не коректний пароль",
        rules: rulesPassword,
      },
    ];
    validationArray = validateArray(validationArray);
    for (let i = 0; i < validationArray.length; i++) {
      if (!validationArray[i].status) {
        res.writeHead(401, headers);
        return res.end(JSON.stringify({ message: validationArray[i].error }));
      }
    }

    // cheking if user exist
    let userExist;
    try {
      userExist = await User.searchByEmail(body.email);
    } catch (e) {
      res.writeHead(400, headers);
      res.end(JSON.stringify({ message: "Cерверна помилка" }));
    }

    if (!userExist.rows[0]) {
      // if not exists return 400 error
      res.writeHead(400, headers);
      res.end(
        JSON.stringify({
          message: "Користувача з таким email не знайдено",
        })
      );
    } else {
      const passwordIsEqual = comparePasswordWithHash(
        body.password,
        body.email,
        userExist.rows[0].password
      );
      if (!passwordIsEqual) {
        res.writeHead(404, headers);
        return res.end(JSON.stringify({ message: "Не вірний пароль" }));
      }
      const token = jwt.sign(
        {
          email: userExist.rows[0].email,
          userId: userExist.rows[0].id,
          name: userExist.rows[0].name,
          surname: userExist.rows[0].surname,
        },
        process.env.jwt_secret_key,
        { expiresIn: 3600 }
      );
      res.writeHead(200, headers);
      return res.end(
        JSON.stringify({
          token,
          userId: userExist.rows[0].id,
          name: userExist.rows[0].name,
          surname: userExist.rows[0].surname,
        })
      );
    }
  });
};

exports.getUserInfo = (req, res) => {
  let body = "";
  req.on("data", (buffer) => {
    body += buffer.toString();
  });
  req.on("end", async () => {
    const token = req.headers["authorization"];
    const userInfo = await getUserInfoByToken(token);
    if (userInfo.message) {
      res.writeHead(404, headers);
      return res.end(JSON.stringify({ message: userInfo.message }));
    } else {
      res.writeHead(200, headers);
      return res.end(JSON.stringify(userInfo));
    }
  });
};
