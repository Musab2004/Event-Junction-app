import React,{useRef} from 'react'
import img3 from'./event.jpg'
import img4 from'./pic1.jpg'
import {Navlink,useNavigate,useLocation} from "react-router-dom"
import {useEffect,useState} from "react";
import Navbar from './Navbar'
import './homepage.css'
import Dashboard from '../Dashboard/DashBoard'
import Shop from '../Events/Shop'
import Loader from './Loader';

export default function Homepage(){
  // this.props.navigation.popToTop();

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
  
  const geteventdata= async (e)=>{
  const res =  await fetch("/getevents",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      
    })
    
 
    });

   const data2=  await res.json();
   setinterestdata({data:data2})
  //  setdata({data:data1})
   
  
    
 }
 geteventdata()
 
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
// window.history.pushState(null, document.title, window.location.href);

window.addEventListener('popstate', function (event)

{

  window.history.replaceState(null, null, '/Login');

});
const sectionRef = useRef(null);
const handleScroll = (scrollOffset) => {
  window.scrollTo({
    top: scrollOffset,
    behavior: 'smooth' // smooth scrolling animation
  });
};
 
    return(

<>

<Navbar userdetails={ userdetails }/>
{data.data!=null &&<div>
{/* <div class="container" style={{marginLeft:'-10%',marginTop:'0%',width:"150%",height:"18%"}} >
<img */}
<img
            src={img3}
            // class="rounded-circle"
            
            style={{width:"125.5%",marginLeft:'-230px',height:"400px"}}
            alt="Black and White Portrait of a Man"
            // loading="lazy"
    
          >  
          </img>
          {/* <button class="btn" onClick={tofindevent}>Browse Event</button>  */}
          
     
{/* </div> */}




<div class="container1 h-100"style={{marginTop:"300px",marginLeft:"50px",width:"1000px",marginBottom:'400px'}}>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-15 col-xl-15">
   
        {/* <div class="card text-black" >
          <div class="card-body p-md-15"> */}
            
            <nav style={{marginLeft:'0%',marginTop:'-20%'}}>
  <div class="nav nav-tabs flex flex-row" id="nav-tab" role="tablist" style={{width:'70%'}}>
    <button class="nav-link active" id="nav-home-tab"   data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style={{fontStyle:'italic'}}>Events Going On</button>
    <button class="nav-link" id="nav-profile-tab"  data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" style={{fontStyle:'italic'}}>Saved Events</button>
    <button class="nav-link" id="nav-contact-tab"  data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" style={{fontStyle:'italic'}}>Events Matching your Interest</button>
    
  </div>
  <div class="tab-content" id="nav-tabContent" >
  <div class="tab-pane dark show active" id="nav-home" role="tabpanel"style={{width:'1100px',marginLeft:'-20%',color: 'black'}}   aria-labelledby="nav-home-tab" tabindex="0" > <Shop userdetails={ state.userdetails } eventdata={ data.data }/></div>
  <div class="tab-pane dark"  id="nav-profile" role="tabpanel" style={{width:'1100px',marginLeft:'-20%',color: 'black'}}   aria-labelledby="nav-profile-tab" tabindex="0"> <Shop userdetails={ state.userdetails } eventdata={ saveddata.data }/></div>
  <div class="tab-pane dark" id="nav-contact" role="tabpanel" style={{width:'1100px',marginLeft:'-20%',color: 'black'}}   aria-labelledby="nav-contact-tab" tabindex="0"><Shop userdetails={ state.userdetails } eventdata={ interestdata.data }/></div>
  {/* <div class="tab-pane dark" id="nav-disabled" role="tabpanel"style={{width:'1100px',marginLeft:'-20%',color: 'black'}}   aria-labelledby="nav-disabled-tab" tabindex="0"><b style={{color:'black'}}>hheheh</b></div> */}
</div>
</nav>
{/* <div>
<button class="btn btn-primary" onClick={() => handleScroll(0)}>Scroll to Top</button>
<button class="btn btn-primary"  onClick={() => handleScroll(100)}>Scroll to Section</button>
      <button class="btn btn-primary" onClick={() => handleScroll(window.innerHeight)}>Scroll to Bottom</button>
      </div> */}
      
     </div>   
     </div>   
     </div>   
     </div>}
     {/* {data.data==null && <div style={{marginTop:'600px',marginLeft:'600px'}}><h style={{fontSize:'40px',marginTop:'1000px',marginLeft:'250px'}}>Loading....</h></div>} */}
     {data.data==null &&<div style={{marginTop:'300px',marginLeft:'300px'}}> <Loader/> </div>}
     {/* </div>   
     </div>    */}
  



</>



    )
}