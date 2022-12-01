const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    collectionName: String,
    items: Number,
    floor: Number,
    value: Number,
    listed: String
})



