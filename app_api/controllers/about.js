/* GET about page. */

const mongoose = require('mongoose');
const about = mongoose.model('about page');

const aboutCreate = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
   };