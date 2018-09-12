// const jsf = require('json-schema-faker');
const faker = require('faker');
const mongoose = require('mongoose');

const model = require('./index.js');

faker.locale = 'en_US';
faker.seed(250);

const fakePledge = () => (
  {
    available: faker.random.boolean(),
    minimumPledgeAmount: faker.random.number(),
    pledgeTitle: faker.commerce.product(),
    pledgeDescription: faker.lorem.paragraph(),
    pledgeBackers: faker.random.number(),
    estimatedShipping: faker.date.future(),
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
  }
);

const fakePledgeList = (pledges) => (
  {
    projectId: faker.random.number(),
    projectName: faker.commerce.productName(),
    pledges,
  }
);


const SaveAPledgeList = (index) => {
  const pledgeListData = [];
  for (let i = 0; i < 5; i += 1) {
    const pledge = fakePledge();
    pledgeListData.push(pledge);
  }
  const pledgeList = fakePledgeList(pledgeListData);
  // console.log('Created a pledge:', index);
  // let temp = new model(PledgeListData);
  return pledgeList;
};

const SaveAllPledgeLists = () => {
  const allProjects = [];
  for (let index = 0; index < 100; index += 1) {
    const temp = SaveAPledgeList(index);
    allProjects.push(temp);
  }

  model.create(allProjects, (err, projects) => {
    if (err) {
      return console.error(err);
    }
    console.log('Saved all the projects');
    mongoose.connection.close();
    return null;
  });
};

SaveAllPledgeLists();
// module.exports = fakePledgeList;

// ****** For a More Advanced Schema ******* */
// var schema = {
//     type: 'object',
//     properties: {
//         projectId: {
//             type: 'number'
//         },
//         projectName: {
//             type: 'string'
//         },
//         pledges: {
//             type: 'object',
//             properties: {
//                 minimumPledgeAmount: {
//                     type: 'number'
//                 },
//                 pledgeTitle: {
//                     type: 'string'
//                 },
//                 pledgeDescription: {
//                     type: 'string'
//                 },
//                 pledgeBackers: {
//                     type: 'number'
//                 },
//                 estimatedShipping: {
//                     type: 'string'
//                 },
//                 validLocations: {
//                     type: 'array',
//                     minItems: '15'
//                 }

//             },
//             required: ['minimumPledgeAmount', 'pledgeTitle', 'pledgeDescription',
//                        'pledgeBackers', 'estimatedShipping', 'validLocations']
//         }
//     },
//     required: ['projectId', 'projectName', 'pledges']
// }

// const createMinPledges = (maxValue, numPledges) => {
  //   let pledges = [];
  //   for (let i = 0; i < numPledges; i += 1) {
    //     let rand = Math.floor(Math.random() * maxValue * i);
    //     pledges.push(rand);
    //   }
    //   return pledges;
    // };
