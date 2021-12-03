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
	penulis INT(10), --aku ganti awalnya varchar jadi int--
	penerbit INT(10),
	harga INT(10),
	stock INT(10),
  PRIMARY KEY (id),
  CONSTRAINT fk_id_penulis
  FOREIGN KEY (penulis) REFERENCES penulis(id),
  CONSTRAINT fk_id_penerbit
  FOREIGN KEY(penerbit) REFERENCES penerbit(id)
);

-- Insert Data penerbit --
INSERT INTO penerbit
  (nama, kota)
  VALUES
	('Deden', 'Altantis'),
  ('Sasuke','Konoha'),
  ('Picolo','Namek'),
  ('Cosmos','Ultra')
;

-- Inser Data penulis --
INSERT INTO penulis
  (nama, kota)
  VALUES
  ('OneEyeDemon','SegitigaBermuda'),
  ('Hacker','DeepWeb'),
  ('Angel','Heaven'),
  ('Napom','United')
;

-- insert Data buku --
INSERT INTO buku
  (ISBN, judul, penulis, penerbit, harga, stock)
  VALUES
	('3333','OtherWorld',1,1,48000,10),
  ('4444','Isekai',2,2,60000,20),
  ('5555','Murim',3,3,70000,13),
  ('6666','Illuminati',4,4,150000,999)
;

--- INNER JOIN ---
SELECT * FROM buku
INNER JOIN penerbit
ON buku.id = penerbit.id;

--- LEFT JOIN ---
SELECT * FROM buku
LEFT JOIN penerbit
ON buku.id = penerbit.id;

--- RIGHT JOIN ---
SELECT * FROM buku
RIGHT JOIN penerbit
ON buku.id = penerbit.id;

--- MAX ---
SELECT MAX(harga)
FROM buku
WHERE stock < 10;

--- MIN ---
SELECT MIN(harga)
FROM buku;

--- COUNT ---
SELECT COUNT(harga)
FROM buku
WHERE harga < 100000;
