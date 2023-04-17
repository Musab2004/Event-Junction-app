var mongoose = require('mongoose');

var RefundticketSchema= new mongoose.Schema({
 username:String,
 email:String,
 eventid:Number,
 eventcreator:String,
 eventname:String,

}, {timestamps: true});

const Refund=mongoose.model('refund', RefundticketSchema);
module.exports=Refund;