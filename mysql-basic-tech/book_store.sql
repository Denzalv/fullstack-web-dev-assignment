-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE bookstore;

-- Use Database --
USE bookstore;

-- Show Table --
SHOW tables;

-- Create table --
CREATE table books (
	id INT AUTO_INCREMENT,
	author1 VARCHAR(100) NOT NULL,
	author2 VARCHAR(100),
	author3 VARCHAR(100),
	title VARCHAR(100),
	description TEXT,
	place_sell VARCHAR(3),
	stock INT DEFAULT 0,
	creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ,
	PRIMARY KEY (id)
);

-- Update Column --
ALTER TABLE books
  ADD price INT default 0,
  ADD status ENUM
  ('available','out of stock','limited'),
  DROP place_sell
;

-- Insert Data --
INSERT INTO books
  (author1, author2, author3, title, description, stock, price, status)
  VALUES
  ('Merkurius','Venus','Bumi','Planet','Ini adalah nama nama planet', 100, 10000,'available'),
  ('Mars','Jupiter','Saturnus','PlanetV2','Ini adalah nama nama planet lanjutan', 1000, 100000,'available'),
  ('Bumi','itu','Datar','FESOCIETY','Ini adalah Fakta yang tersembunyi', 10000, 1000000,'limited')
;

-- Show books --
SELECT * FROM books;

-- Make Alias --
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

-- Find id --
SELECT * FROM books WHERE id = 3;

-- Use Operator AND --
SELECT * FROM books WHERE id = 1 AND title = 'Planet';

-- Use Operator OR --
SELECT * FROM books WHERE id = 2 OR title = 'FESOCIETY';

-- Use Operator NOT --
SELECT * FROM books WHERE NOT author3 = 'Saturnus';

-- Ascending by id --
SELECT * FROM books ORDER BY id ASC;

-- Limit only 2 row --
SELECT * FROM books LIMIT 2;

-- Update author1 & price --
UPDATE books
  SET
  author3 = 'Earth',
  price = 666
  WHERE id =
;

-- Delete one row --
DELETE FROM books WHERE id = 2;