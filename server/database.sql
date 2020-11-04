CREATE DATABASE bookdict;

CREATE TABLE books(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	author VARCHAR(255),
	publish_date DATE,
	summary VARCHAR(255)
);

INSERT INTO books(name,author,summary) VALUES('name', 'author', 'summary');

SELECT * FROM book;

SELECT * FROM books WHERE id = 'id';

DELETE * FROM books WHERE id = 'id';
