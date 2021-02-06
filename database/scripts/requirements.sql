-- Requirements

-- -- Faculty

-- -- -- C
INSERT INTO FACULTY (name, description, status, deleted_date)
VALUES ('Ingeniería', 'Facultad de ingeniería', 'ENABLED', null);
-- -- -- R
SELECT id, name, description, created_date
FROM FACULTY
WHERE status = 'ENABLED';
-- -- -- U
UPDATE FACULTY
SET name='Ingeniería', description='Facultad de ingeniería'
WHERE id=4;
-- -- -- D
UPDATE FACULTY
SET status='DISABLED', deleted_date=DEFAULT
WHERE id=4;

-- -- School

-- -- -- C
INSERT INTO SCHOOL (name, description, status, deleted_date, fk_faculty)
VALUES ('Informática', 'Escuela de Ingeniería Informática', 'ENABLED', null, 1);
-- -- -- R
SELECT S.name, S.description, S.created_date, F.name AS Faculty
FROM SCHOOL S JOIN FACULTY F ON S.fk_faculty = F.id
WHERE S.status = 'ENABLED' AND F.status = 'ENABLED';
-- -- -- U
UPDATE SCHOOL
SET name='Telecomunicación', description='Ingeniería en telecomunicaciones', fk_faculty=2
WHERE id=3;
-- -- -- D
UPDATE SCHOOL
SET status='DISABLED', deleted_date=DEFAULT
WHERE id=3;

-- -- Section

-- -- -- C
INSERT INTO SECTION (name, description, uc, semester, type, ht, hp, hl, status, deleted_date, fk_school)
VALUES ('Bases de datos II', 'PL/SQL', 4, 8, 'MANDATORY', 2, 0, 2, 'ENABLED', null, 1);
-- -- -- R
SELECT SE.name, SE.description, SE.uc, SE.semester, SE.type, SE.ht, SE.hp, SE.hl, SE.created_date, SC.name AS School
FROM SECTION SE JOIN SCHOOL SC ON SE.fk_school = SC.id
WHERE SE.status = 'ENABLED' AND SC.status = 'ENABLED';
-- -- -- U
UPDATE SECTION
SET name='Redes II', description='Fundamentos de CISCO', uc=5, semester=7, type='ELECTIVE', ht=4, hp=0, hl=4, fk_school=2
WHERE id=4;
-- -- -- D
UPDATE SECTION
SET status='DISABLED', deleted_date=DEFAULT
WHERE id=4;

-- -- Person

-- -- -- C
INSERT INTO PERSON (dni, first_name, last_name, status, deleted_date)
VALUES ('V-11.111.111', 'Elpo', 'llofrito', 'ENABLED', null);
-- -- -- R
SELECT dni, first_name, last_name, created_date
FROM PERSON
WHERE STATUS = 'ENABLED';
-- -- -- U
UPDATE PERSON
SET dni='V-99.111.111', first_name='Romulo', last_name='Apellido'
WHERE id=9; 
-- -- -- D
UPDATE PERSON
SET status='DISABLED', deleted_date=DEFAULT
WHERE id=9;

-- -- Person in section

-- -- -- Enroll
INSERT INTO ENROLLMENT (type, status, deleted_date, fk_person, fk_section)
VALUES ('STUDENT', 'ENABLED', null, 1, 3);
-- -- -- Delete
UPDATE ENROLLMENT
SET status='DISABLED', deleted_date=DEFAULT
WHERE fk_person=1 AND fk_section=3;

-- -- Section

-- -- -- Students
SELECT P.dni, P.first_name, P.last_name
FROM SECTION S JOIN ENROLLMENT E ON E.fk_section=S.id JOIN PERSON P ON E.fk_person=P.id
WHERE S.id=3 AND S.status='ENABLED' AND E.status='ENABLED' AND E.type='STUDENT' AND P.status='ENABLED';
-- -- -- Teachers
SELECT P.dni, P.first_name, P.last_name
FROM SECTION S JOIN ENROLLMENT E ON E.fk_section=S.id JOIN PERSON P ON E.fk_person=P.id
WHERE S.id=3 AND S.status='ENABLED' AND E.status='ENABLED' AND E.type='TEACHER' AND P.status='ENABLED';
