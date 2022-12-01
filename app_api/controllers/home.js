/* GET home page. */

const mongoose = require('mongoose');
const home = mongoose.model('home page');

const aboutCreate = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
   };