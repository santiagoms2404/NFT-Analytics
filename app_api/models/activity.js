const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    time: {
        type: Number,
        require: true
    },
    items: {
        type: Number,
        require: true
    },
    status: String,
    price: {
        type: Number,
        require: true
    },
    buyer: {
        type: String,
        require: true
    },
    
})

