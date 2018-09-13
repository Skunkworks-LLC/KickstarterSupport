const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/kickstarter').then(() => {
  console.log('Connected to the database at port -> 27017');
});

const db = mongoose.connection;
db.on('error', err => console.error(err));

module.exports = db;
