var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
 id:String,
 myFile:String

}, {timestamps: true});

const image=mongoose.model('image', imageSchema);
module.exports=image;