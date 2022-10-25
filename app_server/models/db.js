const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/NFT-ANALITICS';
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
  