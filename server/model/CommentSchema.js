var mongoose = require('mongoose');

var CommentSchema= new mongoose.Schema({
    eventid:Number,
    id:Number,
    text:String,
    username:String,
    parentId:Number,
    date:Date,
    myFile:String

}, {timestamps: true});

const comment=mongoose.model('comment', CommentSchema);
module.exports=comment;