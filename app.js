const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const db = require('./models/db');
const User = require('./models/User');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //Uncomment for user create User.create({name: 'Sherman', age: 18});
    res.render('index');
});

app.post('/search', (req, res) => {
  var regex = new RegExp(req.body.name, "i");
  var query = { name: regex };
  User.find(query).then(docs => {
    if (docs.length > 0)
      res.send(docs);
    else
      res.send('Not found'); 
  }).catch(err => console.log(err));
});

app.listen(3000, () => {
  console.log('Running');
});

