DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
id INT(10) auto_increment NOT NULL,
product_name VARCHAR(30) NULL,
department_name VARCHAR(30) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT(4) NULL,
PRIMARY KEY(id)

);


SELECT * FROM products;

USE bamazon;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toaster", "appliances", 4.00, 5), ("raglan-tee", "clothing", 20.00, 6), ("bed frame", "furniture", 200.00, 3), ("Mona Lisa", "Art", 30.00, 1), ("Lamp", "Furniture", 15.00, 10), ("Purse", "Accessories", 100.00, 2), ("The Starry Night", "Art", 500.00, 1);

USE bamazon;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("espresso machine", "appliances", 350.00, 7), ("diamond earrings", "accessories", 500.00, 2), ("Vans", "accessories", 45.00, 10), ("lounge chair", "furniture", 175.00, 3);