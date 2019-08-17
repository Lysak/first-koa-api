const mongoose = require('mongoose');
const config = require('./config.json');

//use native promises
mongoose.Promise = global.Promise; // es6 promise

const connectionURL = `mongodb://${config.db.user}@${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(connectionURL, { useNewUrlParser: true })
.catch((e) => console.log(e));
const db = mongoose.connection;

// Check connection
db.on('connected', () => {
    console.log(`Mongoose connection open on ${connectionURL}`);
});

// Check for Db errors
db.on('error', (err) => console.log(err));

// Check for disconnected
db.on('disconnected', () => {
    console.log('Mongoose connection disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('Mongoose connection closed throw app terminated');
        process.exit(0);
    });
});