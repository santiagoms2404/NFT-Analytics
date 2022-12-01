const express = require('express');
const router = express.Router();

// Require controllers file
const ctrlHome = require('../controllers/home');
const ctrlProfile = require('../controllers/profile');
const ctrlCollection = require('../controllers/collection');
const ctrlAbout = require('../controllers/about');

/* GET homepage. */
router
    .route('/')
    .get(ctrlHome.homeIndex)
    .post(ctrlHome.addCollectionToHome)
    .put(ctrlHome.homeUpdate)
    .delete(ctrlHome.homeDeleteCollection);

/* GET profile page. */
router
    .route('/profile')
    .get(ctrlProfile.profileIndex)
    .post(ctrlProfile.profileCreate)
    .put(ctrlProfile.profileUpdate)
    .delete(ctrlProfile.profileDeleteProfile);

/* GET collection page. */
router
    .route('/collection')
    .get(ctrlCollection.collectionIndex)
    .put(ctrlCollection.collectionUpdate)
    .delete(ctrlCollection.collectionDelete);

/* GET about page. */
router
    .route('/about')
    .get(ctrlAbout.aboutIndex)
    .post(ctrlAbout.createAbout)
    .put(ctrlAbout.aboutUpdate)
    .delete(ctrlAbout.aboutDelete);

module.exports = router;
