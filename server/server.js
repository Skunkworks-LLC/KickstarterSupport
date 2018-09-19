const express = require('express');
const path = require('path');
const cors  = require('cors');
const models = require('./../database/model.js');

const app = express();

const publicFolder = path.join(__dirname, '/../public');
app.use(express.json(), express.urlencoded({ extended: true }), cors());
app.use(express.static(publicFolder));
app.use('/projects/*', express.static(publicFolder));

app.get('/getProjectInfo/:id', (req, res) => {
  // const projectId = req.params.id === undefined ? req.params.id : 1;
  const projectId = req.params.id;
  // console.log('heres the projectId', projectId);
  models.queryOne(projectId, (err, pledgeList) => {
    if (err) {
      return console.error(err);
    }
    // console.log('heres the first pledgeList item', pledgeList[0]);
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

app.listen(3005, () => {
  console.log('server is listening at port 3005');
});
