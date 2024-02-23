
CREATE TABLE visitors(
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

drop table visitors;
SELECT * FROM visitors;
DESC visitors;

INSERT INTO visitors(name, comment) VALUES('allie', 'hi~~');

INSERT INTO visitors VALUES(null, '홍길동', '홍길동입니다.')

CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';

ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;