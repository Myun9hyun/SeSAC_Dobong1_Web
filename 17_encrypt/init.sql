-- Active: 1707101284456@@127.0.0.1@3306@sesac
CREATE TABLE Members(
    id INT PRIMARY KEY AUTO_INCREMENT,
    pw VARCHAR(255) NOT NULL, 
    name VARCHAR(15) NOT NULL,
    userid VARCHAR(15) NOT NULL
);

desc Members;