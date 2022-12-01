const mongoose = require('mongoose');
const homeSchema = new mongoose.Schema({ 
    collectionName: {
        type: String,
        require: true
    },
    floorPrice: {
        type: Number,
        'default': 0,
        require: true
    },
    oneDayChange: {
        type: String,
        'default': 0
    },
    sevenDayChange: {
        type: String,
        'default': 0
    },
    xMinVolume: {
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
    }
});


/*





// Saving mongoose models
var home = mongoose.model('home', homeSchema);
var profile = mongoose.model('profile', profileSchema);
var portfolio = mongoose.model('portfolio', portfolioSchema);
var item = mongoose.model('item', itemsSchema);



var cryptoPunksHome = new home {
    "collectionName": "CryptoPunks",
    "floorPrice": 63,
    "oneDayChange": "6%",
    "sevenDayChange": "9%",
    "xMinVolume": 190,
    "oneDayVolume":700,
    "sevenDayVolume": 7000,
    "owners": 6400,
    "supply": 10000,
}

var boredApeYachClubHome = new home {
    "collectionName": "boredApeYachClub",
    "floorPrice": 70,
    "oneDayChange": "8%",
    "sevenDayChange": "11%",
    "xMinVolume": 290,
    "oneDayVolume":600,
    "sevenDayVolume": 8000,
    "owners": 6900,
    "supply": 10000,
}

var myProfile = new profile {
    "wallet": "0x234464j454h62kn5n4b64n35m2n53",
    "totalCollectionsOwn": 5,
    "listed": "4/10",
    "estimatedValue": 60,
    "cost": 20,
    "realizedProfit": 50,
    "unrealizedProfit": 80
}

var myPortfolio = new portfolio {
    "collectionName": "CryptoPunks",
    "items": 3,
    "floor": 63,
    "value": 189,
    "listed": "2/3"
}

var myItems = new item {
    "rarity": 6743,
    "listPrice": 74,
    "topBid": 61,
    "cost": 21,
    "holdTime": "9 months"
}


*/