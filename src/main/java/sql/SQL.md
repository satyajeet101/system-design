# Content
[Database](#Database) | [Table](#Table)

## Database

```sql
CREATE DATABASE database_name;
CREATE DATABASE IF NOT EXISTS database_name;
SHOW DATABASES;
USE database_name
DROP DATABASE GeeksForGeeks;
```
## Table

```sql
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
   ....);   
CREATE TABLE IF NOT EXISTS table_name (
    column1 datatype constraint,
   ....);
   
SHOW TABLES;

DESCRIBE table_name;

DROP TABLE table_name;

ALTER TABLE table_name ADD column_name datatype constraint;
ALTER TABLE table_name DROP COLUMN column_name;
ALTER TABLE table_name MODIFY COLUMN column_name datatype constraint;
ALTER TABLE table_name RENAME TO new_table_name;

CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Subject VARCHAR(50),
    Year INT,
    Marks INT
);
```