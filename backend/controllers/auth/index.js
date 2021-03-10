'use strict';

const User = require('../../models/user');
const validate = require('../../utils/validation/validation');
const { headers } = require('../../utils/headers/headers');

exports.signUp = (req, res) => {
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
        validationArray.map((el) => {
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
        for (let i = 0 ; i < validationArray.length; i++) {
            if (!validationArray[i].status) {
                res.writeHead(401, headers);
                res.end(JSON.stringify({message: '123123123'}));
            }  
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