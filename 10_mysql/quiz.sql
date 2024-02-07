CREATE TABLE a_universe(
id INT NOT NULL,
name VARCHAR(10) NOT NULL,
age INT
);

INSERT INTO a_universe (id, name, age) VALUES ('20115544', 'a', 34);
INSERT INTO a_universe (id, name, age) VALUES ('20156677', 'b', 31);
INSERT INTO a_universe (id, name, age) VALUES ('20227755', 'c', 25);
INSERT INTO a_universe (id, name, age) VALUES ('20232223', 'd', 23);
INSERT INTO a_universe (id, name, age) VALUES ('20201144', 'e', 23);
INSERT INTO a_universe (id, name, age) VALUES ('20145145', 'f', 30);
INSERT INTO a_universe (id, name, age) VALUES ('20180919', 'g', 26);


DELETE FROM a_universe WHERE name LIKE 'g';

CREATE TABLE b_universe(
    id INT NOT NULL,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL
);

INSERT INTO b_universe (id, name, age) VALUES ('2022091994', 'h', 29);
INSERT INTO b_universe (id, name, age) VALUES ('2020101021', 'i', 23);
INSERT INTO b_universe (id, name, age) VALUES ('2018187566', 'j', 26);


CREATE TABLE subjects(
    신청id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id INT NOT NULL,
    subject VARCHAR(20) NOT NULL
);

INSERT INTO subjects (id, subject) VALUES ('20115544', '네트워크');
INSERT INTO subjects (id, subject) VALUES ('20115544', '알고리즘');
INSERT INTO subjects (id, subject) VALUES ('20156677', '알고리즘');
INSERT INTO subjects (id, subject) VALUES ('20227755', '네트워크');
INSERT INTO subjects (id, subject) VALUES ('20232223', 'C언어');
INSERT INTO subjects (id, subject) VALUES ('20145145', '캡스톤');
INSERT INTO subjects (id, subject) VALUES ('20180919', '캡스톤');
INSERT INTO subjects (id, subject) VALUES ('20180919', 'C언어');
INSERT INTO subjects (id, subject) VALUES ('20180919', '네트워크');
INSERT INTO subjects (id, subject) VALUES ('2022091994', 'C언어');
INSERT INTO subjects (id, subject) VALUES ('2022091994', '캡스톤');
INSERT INTO subjects (id, subject) VALUES ('2022091994', '웹프레임워크');
INSERT INTO subjects (id, subject) VALUES ('2018187566', 'C언어');
INSERT INTO subjects (id, subject) VALUES ('2018187566', '네트워크');
INSERT INTO subjects (id, subject) VALUES ('2018187566', '캡스톤');
desc subjects;

SELECT * FROM subjects;

SELECT * FROM a_universe
INNER JOIN subjects ON a_universe.id=subjects.id ORDER BY name;

SELECT * FROM a_universe
LEFT OUTER JOIN subjects ON a_universe.id=subjects.id;

SELECT * FROM a_universe
RIGHT OUTER JOIN subjects ON a_universe.id=subjects.id;

