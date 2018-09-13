const express = require('express');
const models = require('./../database/model.js');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var usePath = path.join(__dirname, '/../client/dist');
app.use(express.static(usePath));

app.get('/project/*', (req, res) => {
  const projectId = req.url.slice(9);

  models.queryOne(projectId, (err, pledgeList) => {
    if (err) {
      return console.error(err);
    }
    return res.send(pledgeList[0]);
  });
});

app.get('/', (req, res) => {
  models.queryAll((err, pledgeLists) => {
    if (err) {
      return console.error(err);
    }
    return res.send(pledgeLists);
  });
});

app.post('/', (req, res) => {
  console.log('I got a post request');
  res.send('Nothing was posted');
});

app.listen(3000, () => {
  console.log('server is listening at port 3000');
});
