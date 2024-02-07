-- DB 목록 조회
SHOW DATABASES;

-- DATABASE 삭제
DROP DATABASE sesac;
DROp DATABASE mydatabase;

-- CREATE : DATABASE 생성
CREATE database sesac DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
/* 
dobong이라는 데이터 베이스를 생겅하는데,
문자열 셋으로 Utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci를 사용!
utf8mb4는 utf8보다 더 많은 문자 지원(이모지 저장 가능)
>> 이모지를 저장하는 DB라면 utf8mb4, 이모지를 저장하지 않아도 된다
 */
CREATE DATABASE dobong CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 이 데이터베이스를 사용하겠다!(use 명령어, 데이터베이스 사용 선언)
USE sesac;

-- table관련 명령어
-- 1. 테이블 생성
/* 
create table products(
    속성1 값형식 제약조건,
    속성2 값형식 제약조건

) */

-- 제약조건
-- NOT NULL : NULL 허용 X
-- AUTO_INCREMENT : 자동 숫자 증가
-- PRIMARY KEY : 기본키(중복 허용 x, null값 허용 x)
-- DEFAULT : 기본값
-- UNIQUE : 중복 허용 x, null값 허용o
create table products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);
-- 테이블 목록 확인
SHOW TABLES;

-- products 테이블에 어떤 컬럼이 있는지 확인(구조도 확인)
DESC products;


-- table 삭제
drop table products;

TRUNCATE TABLE products;

-- 테이블 변경(수정) ALTER
-- 1, 컬럼 추가
ALTER TABLE products ADD new_column VARCHAR(20);

-- 2. 특정 컬럼 수정(VARCHAR를 INT로 수정)
ALTER TABLE products MODIFY new_column INT;

-- 3. 특정 컬럼 삭제
ALTER TABLE products DROP new_column;

-- DML 
-- DATA MANIPULATION LANGUAGE 데이터 조작어
/* 
user TABLE(
    id: INT not null auto_increment PRIMARY KEY, 
    name: VARCHAR(10) not null,
    age : INT NOT NULL, 
    address : VARCHAR(100);
)
 */

create table user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

SHOW TABLES;

DESC USER;

-- CREATE(데이터 추가) >> INSERT INTO
-- INSERT INTO 테이블이름(컬럼1, 컬럼2, ...) VALUES(값1, 값2, 값3,...)
insert into user (name, age, address) VALUES('김민정',20,'서울특별시 마포구');
insert into user (name, age, address) VALUES('이한이',30,'서울특별시 강남구');
insert into user (name, age, address) VALUES('이지은',22,'대구광역시 동구');
insert into user (name, age, address) VALUES('윤세희',25,'부산광역시 관악구');
insert into user (name, age, address) VALUES('박수진',19,'서울특별시 노원구');
insert into user (name, age, address) VALUES('박찬희',23,'서울특별시 강서구');
insert into user (name, age, address) VALUES('이지수',32,'부산광역시 동구');
insert into user (name, age, address) VALUES('최솔희',37,'강원도 강릉시');
insert into user (name, age, address) VALUES('한소희',26,'충청남도 공주시');
insert into user (name, age, address) VALUES('권희수',40,'강원도 속초시');
insert into user (name, age, address) VALUES('김민지',22,'서울특별시 중구');


-- 테이블 전체 조회
SELECT * FROM user;

-- 테이블 수정
-- UPDATE 테이블 이름 SET 데이터 어떻게 수정할건지 where 어떤 데이터를;

UPDATE user SET name="이민지" where id=1;

-- 3. 데이터 삭제
-- DELETE FROM 테이블 이름 where 삭제 조건; >> 조건에 따른 데이터만 삭제
-- DELETE FROM 테이블 이름; >> 전체 데이터 삭제
DELETE FROM user;
-- 이씨인 사람 지우기 >> 전체 데이터 조회
DELETE FROM USER WHERE name LIKE '이%';

-- 4. 데이터 조회(READ) SELECT ~ FROM 
-- *는 전체 를 의미
SELECT * FROM user; -- user 테이블에서 전체 컬럼 조회

SELECT name FROM user;

-- , 를 이용해 여러 속성 조회 가능
SELECT name, age FROM user;

-- where 절로 조건 적용
SELECT * FROM user where age >= 25;
SELECT * FROM user where id=14;

SELECT name FROM user where id =14;

SELECT id, age from user where name ='이지은';

-- order by : 데이터 정렬
-- desc : 내림차순
-- asc : 오름차순

SELECT * FROM user ORDER BY age;

SELECT * FROM user where id>17 ORDER BY age;

-- LIKE : 문자열 패턴 조회(where과 함께 쓰임)
-- '서울'로 시작하는 주소 찾기

SELECT * FROM user where address LIKE '서울%';
-- 이름의 마지막 글자가 '희' 인 사람 찾기

SELECT * FROM user where name LIKE '%희';

SELECT * FROM user where address LIKE '%광역시%';

-- 이름에 '희'가 들어가는 사람
SELECT name FROM user where name LIKE '%희%' ORDER BY age DESC;

SELECT * FROM user LIMIT 3;

SELECT * FROM user where address LIKE '서울%' LIMIT 2;

-- BETWEEN A AND B: A와 B 사이값 조회(A, B는 포함)
SELECT * FROM user where age BETWEEN 25 AND 30;
-- IN(20, 21, 22, 23) 리스트 요소와 일치하면 참
SELECT * FROM user WHERE age IN(20, 21, 22, 23);

-- IS NULL / IS NOT NULL
INSERT INTO user (name, age) VALUES('서현승', 28);

SELECT * FROM user;
SELECT * FROM user where address IS NULL;
SELECT * FROM user where address IS NOT NULL;

-- 논리 연산자 : AND, OR, NOT
-- 주소가 NULL이 아니면서 age가 25보다 큰 전체 속성 검색

SELECT * FROM user where address IS NOT NULL AND age > 25;
SELECT * FROM user where address IS NOT NULL OR age > 25;

SELECT name FROM user WHERE name LIKE '이%' AND age=22;

-- dinstinct(중복 제거)
SELECT DISTINCT age FROM user;

use dobong;

SHOW tables;

CREATE TABLE member(
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2)
);

DELETE FROM member;
DESC member;

ALTER TABLE member MODIFY id INT;
ALTER TABLE member DROP age;
ALTER TABLE member ADD interest VARCHAR(100);

CREATE TABLE user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age int(3) NOT NULL DEFAULT 0
);

DESC user;

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('hong1234','804bkg','홍길등', 'M', '1990-01-31', 33);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('sexysung','87awjkdf','성춘향', 'F', '1992-03-31', 31);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('power70','qxur8sda','변사또', 'M', '1970-05-02', 53);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('hanjo','jk48fn4','한조', 'M', '1984-10-18', 39);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('widowmaker','38ewifh3','위도우', 'F', '1976-06-27', 47);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('dvadva','k3f3ah','송하나', 'F', '2001-06-03', 22);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('jungkrat','4ifha7f','정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user;

SELECT * FROM user ORDER BY birthday;
SELECT gender FROM user WHERE gender='M' ORDER BY name DESC;
SELECT id, name FROM user where birthday LIKE '199%'

SELECT * FROM user where birthday LIKE '%06%' ORDER BY birthday ASC;

SELECT * FROM user where gender='M' AND birthday LIKE '197%';
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 30;

