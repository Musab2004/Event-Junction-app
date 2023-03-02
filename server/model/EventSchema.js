var mongoose = require('mongoose');

var EventSchema= new mongoose.Schema({
 id:String,
 name:String,
 description:String

}, {timestamps: true});

const event=mongoose.model('event', EventSchema);
module.exports=event;