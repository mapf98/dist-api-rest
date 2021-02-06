module.exports = {
  //Faculty
  CREATE_FACULTY:
    "INSERT INTO FACULTY (name, description, status, deleted_date) VALUES ($1, $2, 'ENABLED', null);",
  READ_FACULTY:
    "SELECT id, name, description, created_date FROM FACULTY WHERE status = 'ENABLED';",
  UPDATE_FACULTY: "UPDATE FACULTY SET name=$1, description=$2 WHERE id=$3;",
  DELETE_FACULTY:
    "UPDATE FACULTY SET status='DISABLED', deleted_date=DEFAULT WHERE id=$1;",
  //School
  CREATE_SCHOOL:
    "INSERT INTO SCHOOL (name, description, status, deleted_date, fk_faculty) VALUES ($1, $2, 'ENABLED', null, $3);",
  READ_SCHOOL:
    "SELECT S.name, S.description, S.created_date, F.name AS Faculty FROM SCHOOL S JOIN FACULTY F ON S.fk_faculty = F.id WHERE S.status = 'ENABLED' AND F.status = 'ENABLED';",
  UPDATE_SCHOOL:
    "UPDATE SCHOOL SET name=$1, description=$2, fk_faculty=$3 WHERE id=$4;",
  DELETE_SCHOOL:
    "UPDATE SCHOOL SET status='DISABLED', deleted_date=DEFAULT WHERE id=$1;",
  //Section
  CREATE_SECTION:
    "INSERT INTO SECTION (name, description, uc, semester, type, ht, hp, hl, status, deleted_date, fk_school) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'ENABLED', null, $9);",
  READ_SECTION:
    "SELECT SE.name, SE.description, SE.uc, SE.semester, SE.type, SE.ht, SE.hp, SE.hl, SE.created_date, SC.name AS School FROM SECTION SE JOIN SCHOOL SC ON SE.fk_school = SC.id WHERE SE.status = 'ENABLED' AND SC.status = 'ENABLED';",
  UPDATE_SECTION:
    "UPDATE SECTION SET name=$1, description=$2, uc=$3, semester=$4, type=$5, ht=$6, hp=$7, hl=$8, fk_school=$9 WHERE id=$10;",
  DELETE_SECTION:
    "UPDATE SECTION SET status='DISABLED', deleted_date=DEFAULT WHERE id=$1;",
  //Person
  CREATE_PERSON:
    "INSERT INTO PERSON (dni, first_name, last_name, status, deleted_date) VALUES ($1, $2, $3, 'ENABLED', null);",
  READ_PERSON:
    "SELECT dni, first_name, last_name, created_date FROM PERSON WHERE STATUS = 'ENABLED';",
  UPDATE_PERSON:
    "UPDATE PERSON SET dni=$1, first_name=$2, last_name=$3 WHERE id=$4;",
  DELETE_PERSON:
    "UPDATE PERSON SET status='DISABLED', deleted_date=DEFAULT WHERE id=$1;",
  //Person in section
  CREATE_ENROLL:
    "INSERT INTO ENROLLMENT (type, status, deleted_date, fk_person, fk_section) VALUES ($1, 'ENABLED', null, $2, $3);",
  DELETE_ENROLL:
    "UPDATE ENROLLMENT SET status='DISABLED', deleted_date=DEFAULT WHERE fk_person=$1 AND fk_section=$2;",
  //Section students/teachers
  READ_SECTION_ENROLLED:
    "SELECT P.dni, P.first_name, P.last_name FROM SECTION S JOIN ENROLLMENT E ON E.fk_section=S.id JOIN PERSON P ON E.fk_person=P.id WHERE S.id=$1 AND S.status='ENABLED' AND E.status='ENABLED' AND E.type=$2 AND P.status='ENABLED';",
};
