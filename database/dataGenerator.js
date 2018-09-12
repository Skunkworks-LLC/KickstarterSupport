const jsf = require('json-schema-faker');
const faker = require('faker');

const model = require('./index.js');
faker.locale = 'en_US';


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

const createMinPledges = (maxValue, numPledges) => {
  let pledges = [];
  for (let i = 0; i < numPledges; i += 1) {
    let rand = Math.floor(Math.random() * maxValue * i);
    pledges.push(rand);
  }
  return pledges;
};

const FakeDataSchema = (pledges) => {
  faker.seed(250);

  return (
    {
      projectId: faker.random.number(),
      projectName: faker.commerce.productName(),
      pledges: pledges,
    }
  );
};

const fakePledge = () => {
  return (
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
};

const SaveAPledgeList = () => {
  let pledgeList = []
  for (var i = 0; i < 5; i += 1) {
    let pledge = pledgeList();
    pledgeList.push(pledge);
  }
  let PledgeList = fakeDataSchema(pledgeList);
  // let temp = new model(PledgeList);
  model.create(PledgeList, (err) => {
    if (err) {
      return console.error(err);
    }
    //saves the model with the newly created data
  });
};

const SaveAllPledgeLists = () => {
  for (let i = 0; i < 100; i += 1) {
    SaveAPledgeList()
  }
};


module.exports = FakeDataSchema;

