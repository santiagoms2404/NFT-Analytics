var express = require('express');
var router = express.Router();

// Require controllers file
var ctrlHome = require('../controllers/home');
var ctrlProfile = require('../controllers/profile');
var ctrlCollection = require('../controllers/collection');
var ctrlAbout = require('../controllers/about');

/* GET homepage. */
router.get('/', ctrlHome.index);
/* GET profile page. */
router.get('/profile', ctrlProfile.index);
/* GET collection page. */
router.get('/collection', ctrlCollection.index);
/* GET about page. */
router.get('/about', ctrlAbout.index);

module.exports = router;
