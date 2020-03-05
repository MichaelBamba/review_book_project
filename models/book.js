const db = require('./con');

class BookReview {
    constructor (id, name, genre, year_published, author, rating) {
        this.id = id;
        this.name = name;
        this.genre = genre; 
        this.year_published = year_published;
        this.author = author;
        this.rating = rating;
    }
    static async getBook() {
        try {
            const respose = await db.any(`SELECT * FROM books;`);
            return respose;

        } catch (error) {
            console.error('ERROR', error);
            return error;
        }
    }
    static async getBookId(id) {
        try {
            const response = await db.any 
            (`SELECT * FROM books WHERE books.id = ${id};`);
            return response
        } catch(error) {
            console.error('ERROR', error);
            return error 
        }
    }
};

module.exports = BookReview;