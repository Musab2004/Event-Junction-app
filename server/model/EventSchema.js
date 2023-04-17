var mongoose = require('mongoose');

var EventSchema= new mongoose.Schema({
 id:Number,
 name:String,
 location:String,
 field:String,
 description:String,
 myFile:String,
 username:String,
 ticket:Number,
 date:Date,
 time:String,
 ticketbought:Number,
 expiresAt: {
    type: Date,
    default: () => new Date(Date.now()+3600) // document expires after 1 hour
  },
  Orgname:String
  
}, {timestamps: true});
EventSchema.index({expiresAt: 1}, {expireAfterSeconds: 0});
const event=mongoose.model('event', EventSchema);
module.exports=event;