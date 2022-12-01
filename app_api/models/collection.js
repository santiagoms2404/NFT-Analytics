const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({ 

    collectionName: {
        type: String,
        require: true
    },
    floorPrice: {
        type: Number,
        'default': 0,
        require: true
    },
    oneDayFloor: {
        type: Number,
        'default': 0
    },
    sevenDayFloor: {
        type: Number,
        'default': 0
    },
    oneDayChange: {
        type: String,
        'default': 0
    },
    sevenDayChange: {
        type: String,
        'default': 0
    },
    MinVolume: {
        type: Number,
        'default': 0
    },
    oneDayVolume: {
        type: Number,
        'default': 0
    },
    sevenDayVolume: {
        type: Number,
        'default': 0
    },
    owners: {
        type: Number,
        require: true
    },
    supply: {
        type: Number,
        require: true
    },
    royalty: {
        type: Number,
        require: true
    }
});

