const express = require('express');
const path = require('path');
const models = require('./../database/model.js');

const app = express();

const publicFolder = path.join(__dirname, '/../public');
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(express.static(publicFolder));
app.use('/projects/*', express.static(publicFolder));

app.get('/:id', (req, res) => {
  const projectId = req.params.id;
  models.queryOne(projectId, (err, pledgeList) => {
    if (err) {
      return console.error(err);
    }
    return res.send(pledgeList[0]);
  });
});

app.get('/', (req, res) => {
  res.send('');
});

app.post('/', (req, res) => {
  res.send('Nothing was posted');
});

app.listen(3000, () => {
  console.log('server is listening at port 3000');
});
