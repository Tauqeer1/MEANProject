/**
 * Created by Tauqeer Ahmed on 4/29/2016.
 */
var mongoose = require('mongoose');


//======================Schema==============
var UserSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String}
});
module.exports.User = mongoose.model('Users', UserSchema);