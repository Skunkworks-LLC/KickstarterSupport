const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.3/kickstarter').then(() => {
  console.log('Connected to the dockerized database at port -> 27017');
});

const db = mongoose.connection;
db.on('error', err => console.error(err));

module.exports = db;
