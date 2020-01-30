const mongoose = require('mongoose');
const url = 'mongodb://localhost/mydb';

module.exports = function() {
  function connect() {
    mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true }, function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  };
  connect();
  mongoose.connection.on('disconnected', connect);
  require('./dbschema');
};
