const mongoose = require('mongoose');

const collectionItemSchema = new mongoose.Schema({
    items: {
        type: Number,
        require: true
    },
    rarity: Number,
    buyNow: Number,
    lastSale: Number,
    topBid: Number,
    owner: {
        type: String,
        require: true
    },
    numbHeld: {
        type: Number,
        require: true
    },
    time: {
        type: Number,
        require: true
    }
})
