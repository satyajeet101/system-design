# Content
[Database](#Database) | [Table](#Table) | [WITH](#WITH) | [Fetch Ties](#Fetch-Ties) | [Arithmetic Operators](#Arithmetic-Operators) | 
[Wildcard Characters](#Wildcard-Characters) | [UPDATE Statement](#UPDATE-Statement) |  [ALTER TABLE](#ALTER-TABLE)

## Database

```sql
CREATE DATABASE database_name;
CREATE DATABASE IF NOT EXISTS database_name;
SHOW DATABASES;
USE database_name
DROP DATABASE GeeksForGeeks; --To delete an entire database and all of its associated tables
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

DROP TABLE table_name; --To delete an entire table including its data and structure

TRUNCATE TABLE  table_name; --Removes all rows from a table but preserves the structure of the table for future use.

ALTER TABLE table_name ADD column_name datatype constraint;
ALTER TABLE table_name DROP COLUMN column_name;
ALTER TABLE table_name MODIFY COLUMN column_name datatype constraint;
ALTER TABLE table_name RENAME TO new_table_name;

CREATE TABLE Customer(
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50),
    Country VARCHAR(50),
    Age INT CHECK (Age >= 0 AND Age <= 99),
    Phone int(10)
);

CREATE TABLE new_table_name AS
SELECT column1, column2, ...
FROM existing_table_name
WHERE ...;

CREATE TABLE SubTable AS
SELECT CustomerID, CustomerName
FROM customer;

SELECT CustomerName 
FROM Customer 
where Age = 21; 

SELECT Country, COUNT(*) AS customer_count
FROM Customer
GROUP BY Country;

SELECT DISTINCT Country
FROM Customer;

SELECT Country, COUNT(*) AS customer_count
FROM Customer
GROUP BY Country
HAVING COUNT(*) >= 2;

SELECT * FROM Customer ORDER BY Age DESC;   

SELECT * FROM Emp1 
WHERE Age BETWEEN 22 AND 24;

SELECT * 
FROM Employee 
WHERE Name LIKE 'L%';

SELECT Name FROM Emp1 WHERE Age IN (21,23);

DELETE FROM Employees
WHERE EmployeeID = 5;  

Since the DELETE statement is a DML operation, it can be rolled back when executed in a statement.
BEGIN TRANSACTION;
DELETE FROM GFG_Employees;
WHERE department = 'Development';

-- If needed, you can rollback the deletion
ROLLBACK;

NSERT INTO Customer (CustomerID, FirstName, LastName, Country, Age, Phone)
VALUES 
(1, 'Luca', 'Bianchi', 'Italy', 23, 'xxxxxxxxxx'),
(2, 'Aiko', 'Tanaka', 'Japan', 21, 'xxxxxxxxxx'),
(3, 'Carlos', 'Gomez', 'Spain', 24, 'xxxxxxxxxx'),

INSERT INTO Student 
VALUES (5, 'Isabella', 'Rome', 'xxxxxxxxxx', 19);

INSERT INTO Student
SELECT * FROM OldStudent;

INSERT INTO Student (Name, Age)
SELECT Name, Age
FROM OldStudent;

INSERT INTO Student
SELECT * FROM OldStudent
WHERE Age > 20;

SELECT * 
FROM Customers
WHERE NOT Country = 'UK';

SELECT * 
FROM Customers
WHERE NOT PostalCode IS NULL;

SELECT * 
FROM Customers
WHERE NOT Country = 'USA' AND NOT Country = 'UK';

```
## WITH
```sql

--CTE : Common Table Expression

WITH cte_name (column1, column2, ...)
AS (
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition
)
SELECT *
FROM cte_name;

--Example 1: Finding Employees with Above-Average Salary

WITH AvgSalaryCTE (averageValue) AS (
    SELECT AVG(Salary)
    FROM Employees
)
SELECT 
    EmployeeID,
    Name, 
    Salary 
FROM 
    Employees 
WHERE 
    Salary > (SELECT averageValue FROM AvgSalaryCTE);
    
WITH MinSalaryCTE (min_salary) AS (
    -- 1. Calculate the single lowest salary value
    SELECT MIN(Salary)
    FROM Employees
)
SELECT 
    e.EmployeeID,
    e.Name, 
    e.Salary 
FROM 
    Employees e
WHERE 
    e.Salary = (SELECT min_salary FROM MinSalaryCTE);

```

## Fetch-Ties
```sql
SELECT * from myTable 
order by salary desc 
fetch first 3 rows only;

SELECT * from myTable 
order by salary desc 
fetch first 3 rows With Ties;

--We get the tied row in our output, only when we use the order by clause in our Select statement
```

## Arithmetic-Operators
```sql
SELECT employee_id, employee_name, salary, 
       salary + 100 AS "salary + 100"
FROM addition;

SELECT employee_id, employee_name, salary, 
       salary + employee_id AS "salary + employee_id"
FROM addition;

NULL means unknown/unavailable
It is not the same as 0 or empty string
Any operation with NULL results in NULL

```
## Wildcard-Characters

| Wildcard Character    | Description                                                                            | Example                                                                 |
|------------------------|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| `%`                   | Represents zero or more characters.                                                    | `SELECT * FROM employees WHERE name LIKE 'A%';` (matches names starting with A) |
| `_`                   | Represents exactly one character.                                                      | `SELECT * FROM employees WHERE name LIKE 'J_n';` (matches names like Jan, Jon) |
| `[ ]`                 | Represents a range of characters, used to match any single character within the range. | `SELECT * FROM products WHERE code LIKE '[A-C]%';` (matches codes starting with A, B, or C) |
| `[ ]` with `^` or `!` | Matches any character that is **NOT** in the specified range.                          | `SELECT * FROM products WHERE code LIKE '[^A-C]%';` (matches codes NOT starting with A, B, or C) |

## UPDATE-Statement
```sql
UPDATE Customer 
SET CustomerName = 'John', 
Country = 'Spain' 
WHERE CustomerID = 1;
```

##  ALTER-TABLE
```sql
ALTER TABLE table_name [ADD | DROP | MODIFY] column_name datatype;

ALTER TABLE table_name
RENAME COLUMN old_name TO new_name;

ALTER TABLE table_name
RENAME TO new_table_name;
```

