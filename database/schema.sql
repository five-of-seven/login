CREATE DATABASE logindb;

USE logindb;



CREATE TABLE UserIdPassword (
  userId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  password varchar(255) NOT NULL
);

