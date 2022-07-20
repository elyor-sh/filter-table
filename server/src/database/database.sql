CREATE DATABASE welbextest;

CREATE TABLE cars(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    count INTEGER,
    distance DECIMAL,
    date VARCHAR(255)
);