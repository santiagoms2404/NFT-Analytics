const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    wallet: {
        type: String,
        require: true
    },
    totalCollectionsOwn: Number,
    listed: String,
    estimatedValue: Number,
    cost: Number,
    realizedProfit: Number,
    unrealizedProfit: Number

})

