var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password : String,
  interests:String

}, {timestamps: true});

const User=mongoose.model('User', UserSchema);
module.exports=User;