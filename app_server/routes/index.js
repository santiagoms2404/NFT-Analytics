var express = require('express');
var router = express.Router();

// Require controllers file
var ctrlHome = require('../controllers/home');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NFT Mountain' });
});

module.exports = router;
