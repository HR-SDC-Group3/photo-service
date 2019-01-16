CREATE TABLE photos (
  id INT NOT NULL PRIMARY KEY,
  restaurant_id INT NOT NULL,
  restaurant_name VARCHAR NOT NULL,
  photo_description: VARCHAR NOT NULL,
  date VARCHAR NOT NULL,
  username VARCHAR NOT NULL,
  photoURL VARCHAR NOT NULL
);