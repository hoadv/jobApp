// grab the mongoose module
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let jobSchema = new Schema({
    email : {type : String, required: true},
    jobTitle : {type : String, required: true},
    location : {type : String, required: true},
    jobType: {type: Number, default: 1, min: 1, max: 2},
    jobCategory: {type: Number, default: 1},
    description : {type : String, required: true},
    closingDate : {type : String},
    country: {type: Number, default: 1},
    companyName : {type : String, required: true},
    website : {type : String, required: true},
    companyDescription : {type : String, required: true},
    logo : {type : String},
});
// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('jobs', jobSchema);