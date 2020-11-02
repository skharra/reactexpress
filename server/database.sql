CREATE DATABASE bookdict;

CREATE TABLE book(
	book_id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	author VARCHAR(255),
	publish_date DATE,
	summary VARCHAR(255)
);