    CREATE  DATABASE tasty;

    CREATE TABLE user (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        surname VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255)
    )

    CREATE TABLE recipes (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES user(id),
        photo_url VARCHAR,
        rating NUMERIC(3, 2),
        category VARCHAR(255),
        ingredients TEXT,
        steps TEXT
    )

    CREATE TABLE comments(
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES user(id),
        recipes_id INTEGER REFERENCES recipes(id),
        content TEXT
    )

    CREATE TABLE marks(
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES user(id),
        recipes_id INTEGER REFERENCES recipes(id),
        value NUMERIC(3, 2),
    )