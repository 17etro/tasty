    DROP DATABASE IF EXISTS tasty;
    CREATE  DATABASE tasty;

    DROP TABLE IF EXISTS users;
    CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        surname VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255)
    );

    DROP TABLE IF EXISTS recipes;
    CREATE TABLE recipes (
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES users(id),
        photo_url VARCHAR,
        rating NUMERIC(3, 2),
        category VARCHAR(255),
        ingredients TEXT,
        steps TEXT
    );

    DROP TABLE IF EXISTS comments;
    CREATE TABLE comments(
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES users(id),
        recipes_id INTEGER,
        FOREIGN KEY (recipes_id) REFERENCES recipes(id),
        content TEXT
    );

    DROP TABLE IF EXISTS marks;
    CREATE TABLE marks(
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES users(id),
        recipes_id INTEGER,
        FOREIGN KEY (recipes_id) REFERENCES recipes(id),
        value NUMERIC(3, 2)
    );