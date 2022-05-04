drop database if exists chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int auto_increment not null primary key,
  message varchar(140) not null,
  username int not null,
  roomname int not null
);

/* Create other tables and define schemas for them here! */
create table usernames (
  id int auto_increment not null primary key,
  username varchar(30) not null
);

create table rooms (
  id int auto_increment not null primary key,
  roomname varchar(30) not null
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

