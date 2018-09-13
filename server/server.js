const express = require('express');
const models = require('./../database/model.js');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var usePath = path.join(__dirname, '/../client/dist');
app.use(express.static(usePath));

app.get('/', (req, res) => {

  models.queryAll((err, results) => {
    if (err) {
      return console.error(err);
    }
    return res.send(results);
  });
});

app.post('/', (req, res) => {
  console.log('I got a post request');
  res.send('Nothing was posted');
});

app.listen(3000, () => {
  console.log('server is listening at port 3000');
});
