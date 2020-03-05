CREATE DATABASE book_review 

CREATE TABLE books  (
id serial PRIMARY KEY,
name text,
genre text,
year_published int,
author text,
rating int CHECK (rating <= 5));

CREATE TABLE reviewer (
id serial PRIMARY KEY,
name text,
email text,
trust int CHECK (trust <= 10));

CREATE TABLE review (
id serial PRIMARY KEY, 
book_id int REFERENCES books(id),
reviewer_id int REFERENCES reviewer(id),
reviewtitle text,
bookreview text,
book_rating int
);

INSERT INTO books (name, genre, year_published, author, rating)
VALUES
('Blood of Elves', 'Fantasy', 1994, 'Andrzej Sopkowski', 4);

INSERT INTO reviewer (name, email, trust)
VALUES
('Michael Bamba', 'bambabamba@gmail.com', 1)

INSERT INTO review (book_id, reviewer_id, reviewtitle, bookreview, book_rating)
VALUES
(1, 1, 'Blood of Elves Review', 'I cried tears of blood and joy.', 5 )



