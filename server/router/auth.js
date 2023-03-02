const express=require('express');

const image = require('../model/imageschema');
const User=require('../model/userSchema')
const Event=require('../model/EventSchema')
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
 
        const{id,name,description}=req.body;
        console.log(req.body)
        if(!id|| !name|| !description){
            return res.status(421).json({error:"Plz filled the field properly"});
        }
        // res.json({message:req.body})
    try{
     const eventExists = await Event.findOne({id:id})
    if(eventExists){
        return res.status(422).json({error:"event with same id exists"})
    }
    // const user =new User({name,email,password}) 
    // const UserRegister=await user.save();
    // if(UserRegister){
        const event =new Event({id,name,description}) 
        const eventRegister=await event.save();
        if(eventRegister){
            res.send(req.body);
            res.status(201).json({message:"user registration successfull"});
        }
        else{
            res.status(500).json({error:"FAiled to registered"})
        }
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







    router.post('/register', async (req,res)=>{
 
        const{name,email,password,string1}=req.body;
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
    const user =new User({name,email,password,interests:string1}) 
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
console.log(req.body)
const events = await User.find({})
res.send(events);
    // User.find({ name: name2}, function (err, docs) {
    //     if (err){
    //         console.log("hello here i am")
    //         console.log(err);
    //     }
    //     else{
    //       if(docs.dataSize()==0){
    //           console.log("password incorrect")
    //           res.send("pssword incorrect");
    //       }
    //       else{
    //         console.log("hello here i am")
    //         res.send(docs)
    //       }
    //         // console.log("First function call : ", docs[0].email);
    //         // docs.body().email
    //     }
    // });

  });
  
  router.post("/getevents", async (req, res) => {
    //    results='hey here i am'
    //     res.send(JSON.stringify(results));
    // reslt=JSON.stringify(req.params.product)
    // const{id}=req.body
    
    const events = await Event.find({})
    res.send(events);
    console.log(events)
      }); 

module.exports=router;