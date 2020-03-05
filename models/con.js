const pgp = require('pg-promise')({
    query: function(e){

    }
});
const option  = {
    host:'localhost',
    database:'book_review'
};

const db=pgp(option);

    module.exports =db