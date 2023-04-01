var mongoose = require('mongoose');

var SavedSchema= new mongoose.Schema({
 username:String,
 eventid:Number,

}, {timestamps: true});

const Saved=mongoose.model('saved', SavedSchema);
module.exports=Saved;