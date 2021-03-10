'use strict';

const User = require('../../models/user');
const validate = require('../../utils/validation/validation');

const signUp = (req, res) => {
    let body = "";
    const rulesName = { required: true, maxLength: 255, minLength: 2 };
    const rulesSurname = { required: true, maxLength: 255, minLength: 3};
    const rulesEmail = { required: true, isEmail: true, maxLength: 30 };
    const rulesPassword = { required: true, minLength: 6, maxLength: 30 };

    req.on('data', buffer => {
        body += buffer.toString();
    });

    req.on('end', () => {
        body = JSON.parse(body);
        const validationArray = [
            { value: body.name, error: 'Не коректне ім\'я', rules: rulesName},
            { value: body.surname, error: 'Не коректне прізвище', rules: rulesSurname},
            { value: body.email, error: 'Не коректний email', rules: rulesEmail},
            { value: body.password, error: 'Не коректний пароль', rules: rulesPassword}
        ];
        validationArray.forEach((el) => {
            const valid = validate(el.value, el.rules);
            if (!valid) {
                const headers = {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'text/plain'
                  };
                res.writeHead(401, headers);
                return res.end('pizdec');
            }
        });
    });
};

const logIn = (req, res) => {
    let body = "";
    req.on('data', buffer => {
        body += buffer.toString();
    });
    req.on('end', () => {
        console.log(body);
        res.end();
    })
};

module.exports = {
    signUp,
    logIn
};