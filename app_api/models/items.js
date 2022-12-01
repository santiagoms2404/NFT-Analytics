const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    rarity: Number,
    listPrice: Number,
    topBid: Number,
    cost: Number,
    holdTime: String
})

