USE sql_intro;

-- CREATE TABLE Books (
--     id INT PRIMARY KEY,
--     title VARCHAR(255)
-- );

-- INSERT INTO Books VALUES
--     (34, "Anna Karenina"),
--     (35, "Sense and Sensibility"),
--     (36, "Pride and prejudice"),
--     (37, "Second Person Singular"),
--     (38, "The Good Widow");

-- SELECT * FROM Books;

-- CREATE TABLE Authors (
--     id INT PRIMARY KEY,
--     name VARCHAR(255)
-- );

-- INSERT INTO Authors VALUES 
--         (11, "Jane Austen"),
--         (12, "Leo Tolstoy"),
--         (13, "Sayed Kashua"),
--         (14, "Lisa Steinke"),
--         (15, "Liz Fenton");

-- SELECT * FROM Authors;

-- CREATE TABLE Authors_Books (
--     authorId INT,
--     bookId INT,
--     PRIMARY KEY (authorId, bookId),
--     FOREIGN KEY (authorId) REFERENCES Authors(id),
--     FOREIGN KEY (bookId) REFERENCES Books(id)
-- );

-- INSERT INTO Authors_Books VALUES
--         (13, 37),
--         (11, 35),
--         (11, 36),
--         (14, 38),
--         (15, 38);

-- SELECT * FROM Authors_Books;


-- who are the author names of "The Good Widow"
SELECT Authors.name
FROM Authors JOIN Authors_Books JOIN Books
ON Authors.id=Authors_Books.authorId AND Books.id=Authors_Books.bookId
WHERE Books.title="The Good Widow";

-- which books write Jane Austen
SELECT Books.title
FROM Authors JOIN Authors_Books JOIN Books
ON Authors.id=Authors_Books.authorId AND Books.id=Authors_Books.bookId
WHERE Authors.name="Jane Austen";





