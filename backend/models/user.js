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
  
    //update user data
    // update() {
        
    // }
    //delete form database
    delete() {
        const { id } = this.info;
        const command = 'DELETE FROM users WHERE id = $1';
        const insertValues = [id];
        return pool.query(command, insertValues);
    }

    save() {
        const { name, surname, email, password } = this.info;
        const command = 'INSERT INTO users( name, surname, email, password ) VALUES($1, $2, $3, $4)';
        const insertValues = [name, surname, email, password];
        return pool.query(command, insertValues);
    }
}

module.exports = User;

