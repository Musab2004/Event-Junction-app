var mongoose = require('mongoose');

var TicketSchema= new mongoose.Schema({
 username:String,
 eventid:Object,
 date:Date,
 time:String,
 expiresAt: {
    type: Date,
    default: () => new Date(Date.now()+3600) // document expires after 1 hour
  }

}, {timestamps: true});

const ticket=mongoose.model('ticket', TicketSchema);
module.exports=ticket;