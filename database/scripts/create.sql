-- Create tables

CREATE TABLE PERSON (
	id serial primary key,
	dni varchar UNIQUE NOT NULL,
	first_name varchar NOT NULL,
	last_name varchar NOT NULL,
	status varchar NOT NULL,
	created_date timestamp NOT NULL DEFAULT NOW(),
	deleted_date timestamp DEFAULT NOW(),
	CONSTRAINT check_constraint_status CHECK(status IN ('ENABLED', 'DISABLED'))
);

CREATE TABLE FACULTY (
	id serial primary key,
  name varchar NOT NULL,
  description varchar NOT NULL,
	status varchar NOT NULL,
	created_date timestamp NOT NULL DEFAULT NOW(),
	deleted_date timestamp DEFAULT NOW(),
	CONSTRAINT check_constraint_status CHECK(status IN ('ENABLED', 'DISABLED'))
);

CREATE TABLE SCHOOL (
	id serial primary key,
  name varchar NOT NULL,
  description varchar NOT NULL,
	status varchar NOT NULL,
	created_date timestamp NOT NULL DEFAULT NOW(),
	deleted_date timestamp DEFAULT NOW(),
  fk_faculty integer NOT NULL,
  CONSTRAINT fk_faculty FOREIGN KEY (fk_faculty) REFERENCES FACULTY(id),
	CONSTRAINT check_constraint_status CHECK(status IN ('ENABLED', 'DISABLED'))
);

CREATE TABLE SECTION (
	id serial primary key,
  name varchar NOT NULL,
  description varchar NOT NULL,
  uc integer NOT NULL,
  semester integer NOT NULL,
  type varchar NOT NULL,
  ht float,
  hp float,
  hl float,
	status varchar NOT NULL,
	created_date timestamp NOT NULL DEFAULT NOW(),
	deleted_date timestamp DEFAULT NOW(),
  fk_school integer NOT NULL,
  CONSTRAINT fk_school FOREIGN KEY (fk_school) REFERENCES SCHOOL(id),
  CONSTRAINT check_constraint_type CHECK(type IN ('MANDATORY', 'ELECTIVE')),
	CONSTRAINT check_constraint_status CHECK(status IN ('ENABLED', 'DISABLED'))
);

CREATE TABLE ENROLLMENT (
	id serial primary key,
  type varchar NOT NULL,
	status varchar NOT NULL,
	created_date timestamp NOT NULL DEFAULT NOW(),
	deleted_date timestamp DEFAULT NOW(),
  fk_person integer NOT NULL,
  fk_section integer NOT NULL,
  CONSTRAINT fk_person FOREIGN KEY (fk_person) REFERENCES PERSON(id),
  CONSTRAINT fk_section FOREIGN KEY (fk_section) REFERENCES SECTION(id),
  CONSTRAINT check_constraint_type CHECK(type IN ('STUDENT', 'TEACHER')),
	CONSTRAINT check_constraint_status CHECK(status IN ('ENABLED', 'DISABLED'))
);
