-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE skilvulbookstore;

-- Create Table penerbit --
CREATE TABLE penerbit (
  id INT(10) NOT NULL AUTO_INCREMENT,
  nama VARCHAR(50),
  kota VARCHAR(50),
  PRIMARY KEY (id)
);

-- Create Table penulis --
CREATE TABLE penulis (
	id INT(10) NOT NULL AUTO_INCREMENT,
	nama VARCHAR(50),
	kota VARCHAR(50),
	PRIMARY KEY (id)
);

-- Create Table buku --
CREATE TABLE buku (
	id INT(10) NOT NULL AUTO_INCREMENT,
	ISBN VARCHAR(50),
	judul VARCHAR(50),
	penulis VARCHAR(50),
	penerbit INT(10),
	harga INT(10),
	stock INT(10),
  PRIMARY KEY (id),
  CONSTRAINT fk_id_penulis
  FOREIGN KEY (id) REFERENCES penulis(id),
  CONSTRAINT fk_id_penerbit
  FOREIGN KEY(penerbit) REFERENCES penerbit(id)
);
-- Insert Data --

