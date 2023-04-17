var mongoose = require('mongoose');

var CommentSchema= new mongoose.Schema({
    eventid:Number,
    text:String,
    username:String,
    parentId:Object,
    date:Date,
    myFile:String,
    expiresAt: {
        type: Date,
        default: () => new Date(Date.now()+3600) // document expires after 1 hour
      }

}, {timestamps: true});

const comment=mongoose.model('comment', CommentSchema);
module.exports=comment;