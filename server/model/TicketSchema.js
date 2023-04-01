var mongoose = require('mongoose');

var TicketSchema= new mongoose.Schema({
 username:String,
 eventid:Number,
 time:String

}, {timestamps: true});

const ticket=mongoose.model('ticket', TicketSchema);
module.exports=ticket;