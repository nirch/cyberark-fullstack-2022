-- CREATE DATABASE sql_intro;
USE sql_intro;

-- DROP TABLE People;
-- CREATE TABLE People(
--     PersonID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     LastName VARCHAR(255),
--     FirstName VARCHAR(255),
--     City VARCHAR(255)
-- );

-- INSERT INTO People (LastName, FirstName, City)
-- VALUES
--     ("Cohen", "Hila", "Jerusalem"),
--     ("Levi", "Michal", "Haifa"),
--     ("Levi", "Matan", "Jerusalem"),
--     ("Levi", "Noa", "Jerusalem"),
--     ("Cohen", "Sivan", "Jerusalem"),
--     ("Levi", "Tal", "Haifa");

-- INSERT INTO People 
-- VALUES
--     (1, "Doe", "John", "Jerusalem");

-- UPDATE People
-- SET City="Afula"
-- WHERE FirstName="Michal";

-- DELETE
-- FROM People
-- WHERE FirstName="Hila";

-- SELECT * 
-- FROM People;

SELECT FirstName
From People
WHERE City="Jerusalem";