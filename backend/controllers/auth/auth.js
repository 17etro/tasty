'use strict';

const crypto = require('crypto');
const User = require('../../models/user');
const validate = require('../../utils/validation/validation');
const { headers } = require('../../utils/headers/headers');

exports.signUp = (req, res) => {
    let body = "";
    const rulesName = { required: true, maxLength: 255, minLength: 2 };
    const rulesSurname = { required: true, maxLength: 255, minLength: 3};
    const rulesEmail = { required: true, isEmail: true, maxLength: 30 };
    const rulesPassword = { required: true, minLength: 6, maxLength: 30 };
    const existUserErr = 'Користувач з таким email вже зареєстрований';

    req.on('data', buffer => {
        body += buffer.toString();
    });

    req.on('end', async () => {
        body = JSON.parse(body);
        let validationArray = [
            { value: body.name, error: 'Не коректне ім\'я', rules: rulesName},
            { value: body.surname, error: 'Не коректне прізвище', rules: rulesSurname},
            { value: body.email, error: 'Не коректний email', rules: rulesEmail},
            { value: body.password, error: 'Не коректний пароль', rules: rulesPassword}
        ];
        validationArray = validationArray.map((el) => {
            const valid = validate(el.value, el.rules);
            if (!valid) {
                return {
                    status: false,
                    error: el.error
                }
            } else {
                return {
                    status: true
                }
            }
        });
        console.log(validationArray);
        for (let i = 0 ; i < validationArray.length; i++) {
            if (!validationArray[i].status) {
                res.writeHead(401, headers);
                res.end(JSON.stringify({message: validationArray[i].error}));
            }  
        }
        console.log(body.email);
        const userExist = await User.searchByEmail(body.email);

        if (userExist.rows[0]) {
            res.writeHead(400, headers);
            res.end(JSON.stringify({message: existUserErr}));
        } else {
            console.log('create new user');
            const salt = crypto.randomBytes(16).toString('hex');

            const hashedPassord = crypto.scriptSync(body.password, salt, 64);
            console.log(salt, hashedPassord.toString('hex'));

            res.writeHead(200, headers);
            res.end();
        }
    });
};

exports.logIn = (req, res) => {
    let body = "";
    req.on('data', buffer => {
        body += buffer.toString();
    });

    req.on('end', () => {
        res.writeHead(401, headers);
        res.end(JSON.stringify({message: '123123123'}));
    });
};