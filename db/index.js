const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/athletic_links', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('mongoose connected correctly!')
});

module.exports = db;