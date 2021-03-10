'use strict';

const { pool } = require('../db/database');

class User {
    constructor(data) {
        this.info = {
            ...data
        };
    }
    // static methods

    // methods

    // save new user to database
    saveToDB() {
        const { name, surname, email, password } = this.info;
        const command = 'INSERT INTO users( name, surname, email, password ) VALUES($1, $2, $3, $4)';
        const insertValues = [name, surname, email, password];

        return pool.query(command, insertValues);
    }
}

module.exports = User;

