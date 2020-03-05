const express = require('express');
const router = express.Router();
const bookModel = require('../models/book')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const bookInfo = await bookModel.getBook()
  res.render('template', {
    locals: {
      title: 'Welcome',
      bookInfo: bookInfo
  },
  partials:{
    partial: 'partial-index'
  }


});
});

module.exports = router;
