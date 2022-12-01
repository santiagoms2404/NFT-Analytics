/* GET collection page. */

const mongoose = require('mongoose');
const collection = mongoose.model('collection page');

const collectionCreate = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
   };