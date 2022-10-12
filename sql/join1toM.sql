USE sql_intro;

-- CREATE TABLE Customers(
--     custID INT PRIMARY KEY, 
--     name VARCHAR(20)
-- );

-- CREATE TABLE Payments(
--     paymentID INT PRIMARY KEY,
--     custID INT,
--     amount INT,
--     paymentMethod ENUM('PayPal', 'cash'),
--     FOREIGN KEY (custID)
--         REFERENCES Customers(custID)
--         ON DELETE CASCADE
-- );

-- INSERT INTO Customers
-- VALUES 
--     (1, "Coca-Cola"),
--     (2, "Mercedes"),
--     (3, "Walmart");

-- INSERT INTO Payments
-- VALUES 
--     (1, 1, 300, "PayPal"),
--     (2, 1, 100, "PayPal"),
--     (3, 1, 200, "Cash"),
--     (4, 1, 330, "PayPal"),
--     (5, 2, 50, "Cash"),
--     (6, 2, 5, "Cash"),
--     (7, 3, 5000, "Paypal");


-- SELECT *
-- FROM Customers JOIN Payments
-- ON Customers.custID=Payments.custID
-- WHERE Customers.name="Coca-Cola"


SELECT *
FROM Customers NATURAL JOIN Payments
WHERE Customers.name="Coca-Cola"


