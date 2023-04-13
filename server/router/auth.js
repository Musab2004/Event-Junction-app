const express=require('express');

const image = require('../model/imageschema');
const User=require('../model/userSchema')
const Event=require('../model/EventSchema')
const Comment=require('../model/CommentSchema')
const Ticket=require('../model/TicketSchema')
const Saved=require('../model/SavedSchema')
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
// const user =new User({name,email,password}) 
// const UserRegister=await user.save();
// if(UserRegister){
    res.send(req.body);
//     res.status(201).json({message:"user registration successfull"});
// }
// else{
//     res.status(500).json({error:"FAiled to registered"})
// }
    
}
catch(err){
    console.log(err);
}




    });

    router.post('/postevent', async (req,res)=>{
 
        const{id,name,description,locations,Field,myFile,username}=req.body;
        console.log(req.body)
        // if(!id|| !name|| !description){
        //     return res.status(421).json({error:"Plz filled the field properly"});
        // }
        // res.json({message:req.body})
        // Event.remove({}, function(err) {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         res.end('success');
        //     }
        // }
        //  );
    try{
        let a=1
        let id=0
        while(a){
            const eventExists = await Event.findOne({id:id}) 
            if(!eventExists){
               break
            } 
            id++;
        }
     
  
    // const user =new User({name,email,password}) 
    // const UserRegister=await user.save();
    // if(UserRegister){
        const event =new Event({id,name,description,location:locations,field:Field,myFile,username}) 
        const eventRegister=await event.save();
        //    Comment.remove({}, function(err) {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         res.end('success');
        //     }
        // }
        //  );
        if(eventRegister){
            res.send(req.body);
            res.status(201).json({message:"user registration successfull"});
        }
        else{
            res.status(500).json({error:"FAiled to registered"})
        }
        res.send(req.body);
  
        
    }
    catch(err){
        console.log(err);
    }
    
    
    
    
        });







    router.post('/register', async (req,res)=>{
 
        const{name,email,password,interest,myFile}=req.body;
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
    const user =new User({name,email,password,interest,myFile}) 
    const UserRegister=await user.save();
    if(UserRegister){
        res.send(req.body);
        res.status(201).json({message:"user registration successfull"});
    }
    else{
        res.status(500).json({error:"FAiled to registered"})
    }
        
    }
    catch(err){
        console.log(err);
    }
    
    
    
    
        });





    router.post('/Logine',async (req,res)=>{
        // console.log(req.body);
         // res.send("mera register page");
         const{email,password}=req.body;
       
        
         if(!email|| !password){
             return res.status(422).json({error:"Plz filled the field properly"});
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
    router.post('/addticket',async (req,res)=>{
        // console.log(req.body);
         // res.send("mera register page");
         const{username,eventid,time}=req.body;
         const tic =new Ticket({username,eventid,time}) 
         const UserRegister=await tic.save();
         res.status(200).json({error:"Ticket bought sucessful"});


     

    });
    router.post('/saveevent',async (req,res)=>{
        // console.log(req.body);
         // res.send("mera register page");
         const{username,eventid}=req.body;
         const alreadysaved = await Saved.findOne({eventid:eventid})
         if(alreadysaved){
             return res.status(422).json({error:"Saved already"})
         }
         const sv =new Saved({username,eventid}) 
         const UserRegister=await sv.save();
         res.status(200).json({error:"event Saved sucessful"});


     

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
        console.log(req.body)
        const events = await Event.find({username:email})
        res.send(events);
        
        
          });  
      router.post("/geteventsuser", async (req, res) => {
        //    results='hey here i am'
        //     res.send(JSON.stringify(results));
        // reslt=JSON.stringify(req.params.product)
        const{email}=req.body
        
        const tikcs = await Ticket.find({email:email}).select('eventid')
       
        let tickids=[]
        for(let i=0;i<tikcs.length;i++){
            tickids.push(tikcs[i].eventid)
        }
        // console.log(tickids)
        const events = await Event.find({'id': {$in:tickids}})
        // console.log(events)
        res.send(events);
        
        
          });
          router.post("/geteventsinterestuser", async (req, res) => {
            //    results='hey here i am'
            //     res.send(JSON.stringify(results));
            // reslt=JSON.stringify(req.params.product)
            const{interest}=req.body
            console.log(interest)
            // console.log(tickids)
            const events = await Event.find({'field': {$in:interest}})
            // console.log(events)
            res.send(events);
            
            
              }); 
          router.post("/geteventsusersaved", async (req, res) => {
            //    results='hey here i am'
            //     res.send(JSON.stringify(results));
            // reslt=JSON.stringify(req.params.product)
            const{email}=req.body
            
            const tikcs = await Saved.find({email:email}).select('eventid')
           
            let tickids=[]
            for(let i=0;i<tikcs.length;i++){
                tickids.push(tikcs[i].eventid)
            }
            // console.log(tickids)
            const events = await Event.find({'id': {$in:tickids}})
            // console.log(events)
            res.send(events);
            
            
              });     

  router.post("/allcomment", async (req, res) => {
    //    results='hey here i am'
    //     res.send(JSON.stringify(results));
    // reslt=JSON.stringify(req.params.product)
    // const{name2}=req.body
    // console.log(req.body)
    const comments = await Comment.find({})
    res.send(comments);

    
      });


      router.post('/Postcomment', async (req,res)=>{
 
        const{ eventid,
            id,
            text,
            username,
            parentId,
            date,myFile}=req.body;
     
        // if(!text){
         
        //     return res.status(421).json({error:"Plz filled the field properly"});

        // }
        // res.json({message:req.body})
    try{
        let a=1
        let id=0
     
        while(a){
            const commentExists = await Comment.findOne({id:id}) 
            if(!commentExists){
               break
            } 
            id++;
        }
    const comment =new Comment({eventid, id,text,username,parentId,date,myFile}) 
    const CommentPost=await comment.save();
    const comments = await Comment.find({})
    console.log(comments);
        //  Comment.remove({}, function(err) {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         res.end('success');
        //     }
        // }
        //  );
    if(UserRegister){
        res.send(comments);
        res.status(201).json({message:"user registration successfull"});
    }
    else{
        res.status(500).json({error:"FAiled to registered"})
    }
        
    }
    catch(err){
        console.log(err);
    }
    
    
    
    
        });
module.exports=router;