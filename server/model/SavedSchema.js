var mongoose = require('mongoose');

var SavedSchema= new mongoose.Schema({
 username:String,
 eventid:Object,
 expiresAt: {
    type: Date,
    default: () => new Date(Date.now()+3600) // document expires after 1 hour
  }
}, {timestamps: true});

const Saved=mongoose.model('saved', SavedSchema);
module.exports=Saved;