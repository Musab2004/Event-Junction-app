const express=require('express');

const User=require('../model/userSchema')
const Event=require('../model/EventSchema')
const Comment=require('../model/CommentSchema')
const Ticket=require('../model/TicketSchema')
const Saved=require('../model/SavedSchema')
const Refund=require('../model/Refundticket')
const router=express.Router();



router.get('/',(req,res)=>{
res.send('Hello world from the server');
});
router.post('/check', async (req,res)=>{
 
    const{name,email,password}=req.body;
    if(!name|| !email|| !password){
        return res.status(421).json({error:"Plz filled the field properly"});
    }
    // res.json({message:req.body})
try{
 const userExists = await User.findOne({email:email})
if(userExists){
    return res.status(422).json({error:"email already exists"})
}

    res.send(req.body);

    
}
catch(err){
    // console.log(err);
}




    });

    router.post('/getuser', async (req,res)=>{
 
        const{email}=req.body;

    try{
     const userExists = await User.findOne({email:email})
   
        res.send(userExists);
 
        
    }
    catch(err){
        console.log(err);
    }
    
    
    
    
        });



    router.post('/postevent', async (req,res)=>{
 
        const{name,description,locations,Field,myFile,username,ticket,date,time,numtickets,Orgname,exactloc}=req.body;
        // console.log(req.body)
        if(!name||!description||!locations||!Field||!myFile||!username||!ticket||!date||!time||!numtickets||!Orgname||!exactloc){
          console.log("Fill the fields correctly")
          return res.status(421).json({Message:"Fill the fields correctly"});
          
          }
    try{
        // let a=1
        // let id=0
        // while(a){
        //     const eventExists = await Event.findOne({id:id}) 
        //     if(!eventExists){
        //        break
        //     } 
        //     id++;
        // }
     
        var date3 = new Date(date)
        // var d2 = new Date.now();
        // var sub = date3.getTime()-d2.getTime();
        const event =new Event({name,description,location:locations,field:Field,myFile,username,ticket,numtickets,date,time,ticketbought:0,expiresAt:date3,Orgname,exactloc}) 
        const eventRegister=await event.save();
    
        if(eventRegister){
            res.send(req.body);
            res.status(201).json({message:"user registration successfull"});
        }
        else{
            res.status(500).json({error:"FAiled to registered"})
        }
        // res.send(req.body);
  
        
    }
    catch(err){
        console.log(err);
    }
    
    
    
    
        });





        router.post('/updateevent', async (req,res)=>{
        
          const{_id,name,description,locations,Field,myFile,username,ticket,date,time,numtickets,Orgname,exactloc}=req.body;
           console.log(req.body)
          if(!name||!description||!locations||!Field||!myFile||!username||!ticket||!date||!time||!numtickets||!Orgname||!exactloc){
            console.log("Fill the fields correctly")
            return res.status(421).json({Message:"Fill the fields correctly"});
            
            }
      
          Event.findByIdAndUpdate(
            {_id }, // search for the user by their email
            {name,description,locations,Field,myFile,username,ticket,date,time,Orgname }, // update the user's name, password, and email
            { new: true } // return the updated user object
          )
          .then(updatedUser => {
            console.log('Updated event:', updatedUser);
          })
          .catch(error => {
            console.error(error);
          });
     
    return res.status(201).json({Message:"update sucessfull"});
          
     
 
      
      
      
      
          });
  

          router.post("/deleteevents", async (req, res) => {
            const{id}=req.body;
            console.log(id)
            try {
              const { id } = req.body;
              console.log("id is this :",id);
          
              await Event.deleteOne({ _id: id });
              await Ticket.deleteMany({ eventid: id });
              await Saved.deleteMany({ eventid: id });
              await Refund.deleteMany({ eventid: id });
              await Comment.deleteMany({ eventid: id });
            
              res.status(200).json({ message: 'Successfully deleted data' });
            } catch (err) {
              console.error(err);
              res.status(500).json({ message: 'Error deleting data' });
            }
            
            
              });






    router.post('/register', async (req,res)=>{
 
        const{name,email,password,locations,interest,myFile}=req.body;
        console.log(req.body);
        if(!name|| !email|| !password){
         
            return res.status(421).json({error:"Plz filled the field properly"});

        }
        // res.json({message:req.body})
    try{
     const userExists = await User.findOne({email:email})
    if(userExists){
        return res.status(422).json({error:"email already exists"})
    }
    const user =new User({name,email,password,locations,interest,myFile}) 
    const UserRegister=await user.save();
    if(UserRegister){
        res.send(req.body);
        res.status(201).json({message:"user registration successfull"});
    }
    else{
        res.status(500).json({error:"Failed to registered"})
    }
        
    }
    catch(err){
        console.log(err);
    }
    
    
    
    
        });

        router.post('/update', async (req,res)=>{
 
          const{name,email,password,locations,interest,myFile}=req.body;
          console.log(req.body);
          if(!name|| !email|| !password){
           
              return res.status(421).json({error:"Plz filled the field properly"});
  
          }
        
      User.findOneAndUpdate(
        { email: email }, // search for the user by their email
        { name: name, password: password, email:email,locations,interest,myFile }, // update the user's name, password, and email
        { new: true } // return the updated user object
      )
      .then(updatedUser => {
        console.log('Updated user:', updatedUser);
      })
  
      
  
      

      
      
      
          });



    router.post('/Logine',async (req,res)=>{
      
         const{email,password}=req.body;
       
        
         if(!email|| !password){
             return res.status(421).json({error:"Plz filled the field properly"});
         }
   
         const user= await User.findOne({email:email});
         console.log(user);
       if(!user){
           res.status(422).json({error:"user not exists"});
       }
       else{
           if(user.password==password){
            res.send(user);
            res.status(200).json({error:"Login sucessful"});
           }
           else{
            res.status(422).json({error:"incorrect password"});
           }
       }

     

    });
    router.post('/getoneevent',async (req,res)=>{
      // console.log(req.body);
       // res.send("mera register page");
       
       const{eventid}=req.body;
       const event = await Event.findOne({_id:eventid})
       res.send(event)
    });
    router.post('/addticket',async (req,res)=>{
        // console.log(req.body);
         // res.send("mera register page");
         
         const{username,eventid,date,time,expirydate}=req.body;
         const event = await Event.findOne({_id:eventid})
         console.log("event ticket number : ",event.numtickets)
         console.log("event ticket bought : ",event.ticketbought)
         if((event.numtickets)==event.ticketbought){
           console.log("all ticket sold")
         return  res.status(421).json({error:"Ticketes are already sold"});
         }
    
         var date3 = new Date(expirydate)
         const tic =new Ticket({username,eventid,date,time,expiresAt:date3}) 
         const UserRegister=await tic.save();
         Event.findOneAndUpdate(
            { _id: eventid },
            { $inc: { ticketbought: 1 } },
            { new: true },
            (err, updatedDocument) => {
              if (err) {
                console.log(err);
              } else {
                console.log("file updated");
              }
            });
            // User.deleteMany({}, (err) => {
            //   if (err) {
            //     console.log(err);
            //   } else {
            //     console.log('All documents deleted from the collection');
            //   }
            // });
            // Event.deleteMany({}, (err) => {
            //   if (err) {
            //     console.log(err);
            //   } else {
            //     console.log('All documents deleted from the collection');
            //   }
            // });
            // Saved.deleteMany({}, (err) => {
            //   if (err) {
            //     console.log(err);
            //   } else {
            //     console.log('All documents deleted from the collection');
            //   }
            // });
            // Refund.deleteMany({}, (err) => {
            //   if (err) {
            //     console.log(err);
            //   } else {
            //     console.log('All documents deleted from the collection');
            //   }
            // });
            // Ticket.deleteMany({}, (err) => {
            //   if (err) {
            //     console.log(err);
            //   } else {
            //     console.log('All documents deleted from the collection');
            //   }
            // });
            // Comment.deleteMany({}, (err) => {
            //   if (err) {
            //     console.log(err);
            //   } else {
            //     console.log('All documents deleted from the collection');
            //   }
            // });
         res.status(200).json({error:"Ticket bought sucessful"});


     

    });
    router.post("/gettickets", async (req, res) => {
        const{_id}=req.body;

        const events = await Ticket.find({eventid:_id})
       
        res.send(events);
        
        
          });
    router.post('/saveevent',async (req,res)=>{
        // console.log(req.body);
         // res.send("mera register page");
         const{username,eventid,expirydate}=req.body;
         console.log(req.body)
         var date3 = new Date(expirydate)
         const alreadysaved = await Saved.findOne({eventid:eventid,username:username})
         
         if(alreadysaved){
             return res.status(422).json({error:"Saved Already"})
         }
         const sv =new Saved({username,eventid,expiresAt:date3}) 
         const UserRegister=await sv.save();
         res.status(200).json({error:"Event Saved!"});

   
     

    });
    router.post('/refundevent',async (req,res)=>{
        // console.log(req.body);
         // res.send("mera register page");
         const{username,email,eventid,eventcreator,eventname,expirydate}=req.body;
   
         const alreadysaved = await Refund.findOne({eventid:eventid})
         var date3 = new Date(expirydate)
         if(alreadysaved){
             return res.status(422).json({Message:"Refund ticket request  already added"})
         }
         const sv =new Refund({username,email,eventid,eventcreator,eventname,expiresAt:date3}) 
         const UserRegister=await sv.save();
         res.status(200).json({Message:"Refund ticket request added  sucessfully"});

   
     

    });



    router.post("/getrefund", async (req, res) => {
  
        const{username}=req.body
            console.log("username : ",username)
        const refunds = await Refund.find({eventcreator:username})
    
         console.log(refunds)
        res.send(refunds);
       
        
        
          });  

   router.post("/acceptrefund", async (req, res) => {
        //    results='hey here i am'
        //     res.send(JSON.stringify(results));
        // reslt=JSON.stringify(req.params.product)
        const query=req.body
        const{eventid,email}=req.body
        console.log(query)
        // const query = { name: 'John', age: 25 };

// Use the findOneAndDelete method to find and delete a document with the given query
Refund.findOneAndDelete(query, (err, result) => {
  if (err) {
    console.log("error :",err);
  } else {
    console.log("result : ",result); // The deleted document
  }
});
Ticket.deleteMany({ username: email, eventid: eventid })
  .exec((err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("NUmber of tickets : ",result.deletedCount); // The number of deleted documents
      let Numberoftickets=-1*result.deletedCount
      Event.findOneAndUpdate(
        { _id: query.eventid },
        { $inc: { ticketbought: Numberoftickets } },
        { new: true },
        (err, updatedDocument) => {
          if (err) {
            console.log(err);
          } else {
            console.log(updatedDocument);
          }
        });
    
    }
  });
        // const refunds = await Refund.find({email:email})
     
        // console.log(events)
        
        
        
          }); 
          router.post("/rejectrefund", async (req, res) => {
            //    results='hey here i am'
            //     res.send(JSON.stringify(results));
            // reslt=JSON.stringify(req.params.product)
            const query=req.body
            // const query = { name: 'John', age: 25 };
    
    // Use the findOneAndDelete method to find and delete a document with the given query
    Refund.findOneAndDelete(query, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result); // The deleted document
      }
    });
            
            
              }); 



    router.post("/uploads", async (req, res) => {
        const {myFile} = req.body;
         console.log(req.body)
        try{
            const newImage = new image({myFile:myFile})
            newImage.save();
            res.send(newImage);
            // res.status(201).json({ msg : "New image uploaded...!"})
        }catch(error){
            res.status(409).json({ message : error.message })
        }
    });







// get all users
router.post("/all", async (req, res) => {
//    results='hey here i am'
//     res.send(JSON.stringify(results));
// reslt=JSON.stringify(req.params.product)
const{name2}=req.body
// console.log(req.body)
const events = await User.find({})
res.send(events);


  });
  router.post("/getevents", async (req, res) => {
 
    const events = await Event.find({})
    res.send(events);
    
    
      });
      router.post("/getcreaterevents", async (req, res) => {
        //    results='hey here i am'
        //     res.send(JSON.stringify(results));
        // reslt=JSON.stringify(req.params.product)
        const{email}=req.body
        // console.log(req.body)
        const events = await Event.find({username:email})
        res.send(events);
        
        
          });  
      router.post("/geteventsuser", async (req, res) => {
        //    results='hey here i am'
        //     res.send(JSON.stringify(results));
        // reslt=JSON.stringify(req.params.product)
        const{email}=req.body
        console.log("email : ",email)
        const tikcs = await Ticket.find({username:email}).select('eventid')
       
        let tickids=[]
        // console.log(tikcs.length)
        for(let i=0;i<tikcs.length;i++){
            tickids.push(tikcs[i].eventid)
        }
        console.log("ticket length :",tikcs.length)
        if(tikcs.length==0){
          return res.send(null);
        }
        const events=Event.find({ _id: { $in: tickids } }, (err, docs) => {
          if (err) {
            console.error(err);
          } else {
            // console.log(`Found ${docs.length} documents with IDs ${tickids}:`);
            docs.forEach(doc => {
              // console.log(doc);
              
            });
            res.send(docs);
          }
        });
        // console.log(events)
 
        
        
          });
          router.post("/geteventsinterestuser", async (req, res) => {
            //    results='hey here i am'
            //     res.send(JSON.stringify(results));
            // reslt=JSON.stringify(req.params.product)
            const{interest}=req.body
            // console.log(interest)
            // console.log(tickids)
            // const events = await Event.find({'field': {$in:interest}})
            Event.find({ field: { $in: interest } }, (err, docs) => {
              if (err) {
                console.error(err);
              } else {
                // console.log(`Found ${docs.length} documents with IDs ${interest}:`);
                docs.forEach(doc => {
                  // console.log(doc);
                  
                });
                res.send(docs);
              }
            });
            // console.log(events)
           
            
            
              }); 
          router.post("/geteventsusersaved", async (req, res) => {
    
            const{email}=req.body
            
            const tikcs = await Saved.find({username:email}).select('eventid')
            console.log("tiks : ",tikcs)
           if(tikcs==null){
            return res.send(null);
           }
            let tickids=[]
            if(tikcs.length==0){
              return res.send(null);
            }
      
            for(let i=0;i<tikcs.length;i++){
                tickids.push(tikcs[i].eventid)
            }
            // console.log("Events call",tickids.length)
            // console.log("events ids : ",tikcs[0].eventid)
            // console.log(tickids)
            const events=Event.find({ _id: { $in: tickids } }, (err, docs) => {
              if (err) {
                console.error(err);
              } else {
                // console.log(`Found ${docs.length} documents with IDs ${tickids}:`);
                docs.forEach(doc => {
                   console.log(doc);
                  
                });
                res.send(docs);
              }
            });
            // const events = await Event.find({'id': {$in:tickids}})
            // console.log(events)
            // console.log(events)
            
            
            
              });     

  router.post("/allcomment", async (req, res) => {
  
    const comments = await Comment.find({})
    res.send(comments);

    
      });


      router.post('/Postcomment', async (req,res)=>{
 
        const{ eventid,
            id,
            text,
            username,name,
            parentId,
            date,myFile,expirydate}=req.body;
            var date3 = new Date(expirydate)
      // console.log(req.body)
    try{
        // let a=1
        // let id=1
     
   
    const comment =new Comment({eventid,text,username,name,parentId,date,myFile,expiresAt:date3}) 
    const CommentPost=await comment.save();
    // Comment.deleteAll({}, function (err) {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     console.log('Successfully deleted all documents');
    //   }
    // });

    }
    catch(err){
        console.log(err);
    }
    
    
    
    
        });





      router.post('/deletecomment', async (req,res)=>{
 
        const{commentId}=req.body;
      console.log(req.body)
    try{
        // let a=1
        // let id=1
     
        await Comment.deleteOne({ _id: commentId });
    // Comment.deleteAll({}, function (err) {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     console.log('Successfully deleted all documents');
    //   }
    // });

    }
    catch(err){
        console.log(err);
    }
    
    
    
    
        });
module.exports=router;