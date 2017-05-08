// grab the mongoose module
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username : {type : String, required: true},
    password : {type : String, required: true},
    type: {type: Number, default: 1, min: 1, max: 2}
});
// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('users', userSchema);