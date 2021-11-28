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
	creation_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
	PRIMARY KEY (id)
);

-- Insert Data --
INSERT INTO bookstore (id, name, age) VALUES(1, 'Terra', 2);
