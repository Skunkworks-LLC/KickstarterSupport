const express = require('express');
const path = require('path');
const models = require('./../database/model.js');

const app = express();
const usePath = path.join(__dirname, '/../client/dist');
app.use(express.json(), express.urlencoded({ extended: true }), express.static(usePath));

app.get('/projects/:id', (req, res) => {
  const projectId = req.params.id;
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
