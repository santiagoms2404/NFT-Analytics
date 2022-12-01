/*

const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/NFT-ANALYTICS';
mongoose.connect(dbURI, {useNewUrlParser: true}); 

// Monitors for a successful connection through Mongoose
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

// Checks for a connection error
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});

// Checks for a disconnection event
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

*/
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://santiagomarin:Pioj2404.@cluster0.qoltszy.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true}); 

require('./activity')
require('./collection')
require('./collectionItem')
require('./home')
require('./items')
require('./porfolio')
require('./profile')
