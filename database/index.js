const mongoose = require('mongoose');
const db = require('./connection.js');

const pledgeListSchema = new mongoose.Schema({
  projectId: Number,
  projectName: String,
  pledges: [{
    available: Boolean,
    minimumPledgeAmount: Number,
    pledgeTitle: String,
    pledgeDescription: String,
    pledgeRewards: [String],
    estimatedShipping: Date,
    validLocations: [String],
    pledgeBackers: Number,
  }],
});

// declare a pledgeList by calling
const pledgeListModel = mongoose.model('PledgeList', pledgeListSchema);


module.exports = pledgeListModel;
/*

MongoDb Notes

//then make pledgeList objects by calling pledgeList wiht the new operator
//When I call it I pass in the values that I want it to have for it's
//variables as defined in the schema


//So I can make literally an array of objects that holds the pledges and what status
//That they have for the available, minamount, pledgeTitle, etc...

//If I wantt there to be methods on the pledgeList object then I just have to specify
//Them as a portion of the schema by calling
//pledgeListSchema.methods.functionName  = () => {}
//This should be called before I make a model pf the pledgeList schema I think
//As I'm not sure whether it just extends from the object or if it makes it with the new variable


var examplePledgeList = new pledgeListModel({ theData: 'This should be all the attributes I specified in the schema' });
//To save my objects then I use

//Save the data info with the save method that they come with
examplePledgeList.save((err, examplePledgeList) => {
    if (err) { return console.error(err); }
});


//To perform queries on the table that O created then I just need to run .find off of
//The name of the table that was specified in model => (models consist of documents instead of 'records')
PledgeList.find((err, pledgeLists) => {
    if (err) { return console.error(err); }
    console.log('here are all of your pledgeLists (i.e. pledgeList documents)', pledgeLists);
});

//if you want to filter out items then that's the first object that you pass in
//it can be done in regex

PledgeList.find({ name: '/^fluff/' }, (err, pledgeLists) => {
    if (err) { return console.error(err); }
    console.log('returns all of the items named fluffy, use regex with name to query for the \
            certain items that you want ');
});

*/
