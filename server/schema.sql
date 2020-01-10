-- CREATE DATABASE chat; -- already created

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name CHAR(23) NOT NULL,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  name CHAR(23) NOT NULL,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  message CHAR(255) DEFAULT NULL,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

CREATE TABLE users_rooms (
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *    mysql -u student -p < server/schema.sql (if pairing station)
 *  to create the database and the tables.*/

