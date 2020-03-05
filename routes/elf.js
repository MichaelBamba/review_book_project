const express = require('express');
const router = express.Router();
const bookModel = require('../models/book')

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  const bookInfo = await bookModel.getBookId(1)
  res.render('template', {
    locals: {
      title: 'Welcome',
      bookInfo: bookInfo
  },
  partials:{
    partial: 'partial-elf'
  }
});
});

module.exports = router;
