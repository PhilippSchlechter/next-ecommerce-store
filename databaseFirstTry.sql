CREATE TABLE products(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL,
  size varchar(30) NOT NULL,
  price integer NOT NULL
);

INSERT INTO products
(name, type, size, price)
VALUES
  ('Tower','Poster','50 x 50', 111),
  ('Sea', 'Poster', '50 x 50', 111),
  ('Dragon', 'Poster', '50 x 50', 111),
  ('Spaceship', 'Poster', '50 x 50', 111);

  SELECT * FROM products;
