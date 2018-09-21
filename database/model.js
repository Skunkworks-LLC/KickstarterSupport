const faker = require('faker');
const mongoose = require('mongoose');
const moment = require('moment');


const model = require('./index.js');

faker.locale = 'en_US';
faker.seed(250);

const deliveryMonth = () => {
  const now = moment();
  const monthsAway = Math.floor(Math.random() * 4);
  const estimatedShippingDate = now.add(monthsAway, 'months').format('MMMM YY');
  return estimatedShippingDate;
};

const fakePledge = (minPledgeSoFar, maxBackersSoFar) => (
  {
    available: faker.random.boolean(),
    minimumPledgeAmount: faker.random.number({ min: minPledgeSoFar, max: (minPledgeSoFar + 150) }),
    pledgeTitle: faker.commerce.product(),
    pledgeDescription: faker.lorem.paragraph(),
    pledgeRewards: [
      faker.commerce.product(),
      faker.commerce.product(),
      faker.commerce.product(),
    ],
    estimatedShipping: deliveryMonth(),
    pledgeBackers: faker.random.number({ min: 0, max: (maxBackersSoFar + 25) }),
  }
);

const fakePledgeList = (pledges, index) => (
  {
    projectId: index,
    projectName: faker.commerce.productName(),
    shipToAnywhere: faker.random.boolean(),
    validLocations: [
      faker.random.locale(),
      faker.random.locale(),
      faker.random.locale(),
      faker.random.locale(),
      faker.random.locale(),
      faker.random.locale(),
      faker.random.locale(),
      faker.random.locale(),
      faker.random.locale(),
      faker.random.locale(),
    ],
    pledges,
  }
);


const SaveAPledgeList = (index) => {
  let minPledgeSoFar = 0;
  let maxBackersSoFar = 2500;
  const pledgeListData = [];
  for (let i = 0; i < 5; i += 1) {
    const pledge = fakePledge(minPledgeSoFar, maxBackersSoFar);
    minPledgeSoFar = pledge.minimumPledgeAmount;
    maxBackersSoFar = pledge.pledgeBackers;
    pledgeListData.push(pledge);
  }
  const pledgeList = fakePledgeList(pledgeListData, index);
  return pledgeList;
};

const SaveAllPledgeLists = () => {
  const allProjects = [];
  for (let index = 0; index < 100; index += 1) {
    const temp = SaveAPledgeList(index);
    allProjects.push(temp);
  }

  // calls any validators in schema, add more validators
  model.create(allProjects, (err, projects) => {
    if (err) {
      return console.error(err);
    }
    console.log('Saved all the projects');
    // mongoose.connection.close();
    return null;
  });
};

SaveAllPledgeLists();

module.exports = {
  queryAll: (callback) => {
    model.find({}, (err, pledgeLists) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, pledgeLists);
    });
  },
  queryOne: (projectId, callback) => {
    model.find({ projectId }, (err, pledgeList) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, pledgeList);
    });
  },
};
