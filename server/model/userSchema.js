var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password : String,
  interest: [{

    type: String
  }],
  myFile:String
}, {timestamps: true});

const User=mongoose.model('User', UserSchema);
module.exports=User;