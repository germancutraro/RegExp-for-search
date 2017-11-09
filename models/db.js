const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/liking', {useMongoClient: true}).then(() => {
  console.log('connected!');
});