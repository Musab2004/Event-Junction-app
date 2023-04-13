import React from 'react'
import img3 from'./index9.webp'
import img4 from'./pic1.jpg'
import {Navlink,useNavigate,useLocation} from "react-router-dom"
import {useEffect,useState} from "react";
import Navbar from './Navbar'
import './homepage.css'
import Dashboard from '../Dashboard/DashBoard'
import Shop from '../Events/Shop'

export default function Homepage(){
  const {state} = useLocation();
  const navigate = useNavigate();
 let userdetails=state.userdetails
 let interest=userdetails.interest
 const[data,setdata]=useState({
  data:null
});
const[saveddata,setsaveddata]=useState({
  data:null
});
const[interestdata,setinterestdata]=useState({
  data:null
});
useEffect(() => {
  let email=state.userdetails.email

 const getsaveddata= async (e)=>{
  const res =  await fetch("/geteventsusersaved",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email
    })
    
 
    });

   const saveddata1=  await res.json();
   setsaveddata({data:saveddata1})
    
 }
   getsaveddata()
},[saveddata.data]);
let a="he"
useEffect(() => {
  
  const getinterestdata= async (e)=>{
  const res =  await fetch("/getevents",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      interest
    })
    
 
    });

   const data2=  await res.json();
   setinterestdata({data:data2})
  //  setdata({data:data1})
   
  
    
 }
 getinterestdata()
 
 });
 useEffect(() => {
  
  const getdata= async (e)=>{
  const res =  await fetch("/getevents",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      
    })
    
 
    });

   const data1=  await res.json();
   setdata({data:data1})
   
  
    
 }
 getdata()
 
 },[data.data]);

 console.log("events :",data)
 console.log("saved events :",saveddata)
 const tofindevent= async (e)=>{
  (navigate("/FindEvent",{state:{ userdetails:userdetails }}))
}
    return(

<>

<Navbar userdetails={ userdetails }/>
<div class="container" style={{width:"70%",height:"20%"}} >
<img
            src={img4}
            // class="rounded-circle"
            

            alt="Black and White Portrait of a Man"
            loading="lazy"
            
          >  
          </img>
          <button class="btn" onClick={tofindevent}>Browse Event</button> 
          
     
</div>
<div class="container1 h-100"style={{marginTop:"600px",marginLeft:"500px",width:"1100px"}}>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-15 col-xl-15">
   
        {/* <div class="card text-black" >
          <div class="card-body p-md-15"> */}
            
        
 <div style={{marginRight:"10px",marginTop:"10px"}}>
 <b style={{fontSize:"40px"}}>Events going on:</b>    
 <Shop userdetails={ state.userdetails } eventdata={ data.data }/>
 <b style={{fontSize:"40px"}}>Saved Events :</b> 
 <Shop userdetails={ state.userdetails } eventdata={ saveddata.data }/>
 <b style={{fontSize:"40px"}}>Events Matches your interest :</b> 
 <Shop userdetails={ state.userdetails } eventdata={ interestdata.data }/>
     </div>       
     </div>   
     </div>   
     </div>   
     {/* </div>   
     </div>    */}
  



</>



    )
}