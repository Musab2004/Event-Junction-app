var mongoose = require('mongoose');

var RefundticketSchema= new mongoose.Schema({
 username:String,
 email:String,
 eventid:Object,
 eventcreator:String,
 eventname:String,
 expiresAt: {
    type: Date,
    default: () => new Date(Date.now()+3600) // document expires after 1 hour
  }

}, {timestamps: true});

const Refund=mongoose.model('refund', RefundticketSchema);
module.exports=Refund;