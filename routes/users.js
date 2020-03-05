const express = require('express');
const router = express.Router();
const reviewerModel = require('../models/usersModel')

/* GET home page. */
router.get('/:signup', async function(req, res, next) {
  const userInfo = await reviewerModel.getUserInfo()
  res.render('template', {
    locals: {
      title: 'Sign In',
      userInfo = userInfo
  },
  partials:{
    partial: 'partial-login'
  }


});
});

module.exports = router;