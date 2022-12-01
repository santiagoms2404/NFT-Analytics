/* GET profile page. */

const mongoose = require('mongoose');
const profile = mongoose.model('profile page');

const profileCreate = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
   };