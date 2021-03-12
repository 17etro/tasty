'use strict';

const { pool } = require('../db/database');

class User {
    constructor(data) {
        this.info = {
            ...data
        };
    }
    // static methods
    static searchByEmail(email) {
        const command = 'SELECT * FROM users WHERE email = $1';

        return pool.query(command, [email]);
    }
    // methods

    // save new user to database
    saveToDB() {
        const { name, surname, email, password, salt } = this.info;
        const command = 'INSERT INTO users( name, surname, email, password, salt ) VALUES($1, $2, $3, $4, $5)';
        const insertValues = [name, surname, email, password, salt];

        return pool.query(command, insertValues);
    }
}

module.exports = User;

