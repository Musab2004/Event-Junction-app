import { useState,Component } from "react";
import {Navlink,useNavigate,useLocation} from "react-router-dom"
import img4 from'../Components/pic1.jpg'
import Comments from '../comment_Forum/Comments'
import Navbar from '../Components/Navbar'
import avatar from '../download.png'
export default function Eventdetails(){
    const {state} = useLocation();
    console.log(state)
    let username=state.userdetails.name
    let eventid=state.eventdetails._id
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    // console.log(currentDate)
    let time=currentDate
    let date1=state.eventdetails.date
    let expirydate=state.eventdetails.expiresAt
    // console.log(state.eventdetails.date)
    const PostData= async (e)=>{
      e.preventDefault();
      const res = await fetch("/addticket",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,eventid,time,expirydate
        })
        
     
        });
        const data= await res.json();
        console.log(data)
  
    
    }
    const Saveevent= async (e)=>{
      e.preventDefault();
      const res = await fetch("/saveevent",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,eventid,expirydate
        })
        
     
        });
        const data= await res.json();
        console.log(data)
  
    
    }
    const handleScroll = (scrollOffset) => {
      window.scrollTo({
        top: scrollOffset,
        behavior: 'smooth' // smooth scrolling animation
      });
    };
   
// console.log(date.getMonth())
const dater = new Date(date1);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formattedDate = `${dater.getDate()} ${months[dater.getMonth()]}, ${dater.getFullYear()}`;

console.log(formattedDate);
    // const formattedDate = `${date1.getDate()} ${months[date1.getMonth()]}, ${date1.getFullYear()}`;

// console.log(formattedDate); // Output: "16 Jan, 2014"
    return (
        <>
        <div>
        <Navbar userdetails={ state.userdetails }/>
        </div>
        {/* <form   class="fixed-top"   
  >
        <div class="nav nav-tabs flex" id="nav-tab" role="tablist" style={{width:'50%'}}>
    <button class="nav-link active" id="nav-home-tab" onClick={() => handleScroll(0)}  data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link" id="nav-profile-tab" onClick={() => handleScroll(1000)} data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="nav-contact-tab" onClick={() => handleScroll(window.innerHeight)} data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
    <button class="nav-link" id="nav-disabled-tab"  data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
  </div>
  </form> */}
        <div>
        <img src={state.eventdetails.myFile} style={{marginLeft:"0px",marginTop:'15%', width:"700px",height:"300px", borderRadius:"10px"}} class="img-fluid" alt="Responsive image"/>


        </div>
          <div class="container1 h-100"style={{marginTop:"0px",width:"800px",marginLeft:"320px"}}>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-15 col-xl-15">
      <form   class="fixed-top" style={{marginLeft:"78%",marginTop:'20%',width:"250px",height:'200px'}}  
  >
      <p>Ticket price : {state.eventdetails.ticket}</p>
      <button onClick={PostData} className="comment-form-button" style={{backgroundColor:'black'}}>
        Buy Ticket
      </button>
      <button className="comment-form-button"  onClick={Saveevent}style={{marginTop:'20px',backgroundColor:'black'}} >
        Save event
      </button>
    </form>
      {/* <button style={{marginLeft:"600px",marginTop:"100px",width:"200px",height:"50px"}} class="btn btn-primary" to='/dashboard'onClick={PostData}>Buy ticket</button>
      <button style={{marginLeft:"600px",marginTop:"10px",width:"200px",height:"50px"}} class="btn btn-primary" to='/dashboard'onClick={Saveevent}>Save Event</button>   */}
       
        {/* <div class="card text-black" >
          <div class="card-body p-md-9"> */}
            <div class="row justify-content-center" style={{marginLeft:'-50%'}}>
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"></div>
        {/* <b style={{margin:"30px",fontSize:"40px"}}>{state.eventdetails.name}:</b> */}
        <b style={{margin:"30px",fontSize:"40px",fontFamily:'bolder'}}>When and Where : </b>
        {/* <div>
        <i class="fas fa-lock fa-lg me-3 fa-fw" style={{marginTop:'-7%', fontSize: '24px'}}></i>
        <b style={{fontSize:"20px",fontFamily:'bolder'}}>Date and Time</b>
        <div>
        <h>{formattedDate}</h>
        </div>
        </div> */}
   
 

 
  
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <section>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i class="fas fa-lock fa-lg me-3 fa-fw" style={{ fontSize: '24px' }}></i>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <b style={{ fontSize: '20px', fontFamily: 'bolder' }}>Date and Time</b>
        <h>{formattedDate}</h>
        <h>{state.eventdetails.time}</h>
      </div>
    </div>
  </section>
  <div style={{ borderLeft: '1px solid black', height: '100px',marginLeft:'-700px' }}></div>
  <section style={{marginLeft:'-10px'}}>
    <div style={{ display: 'flex', alignItems: 'center',marginLeft:'-800px' }}>
      <i class="fas fa-lock fa-lg me-3 fa-fw" style={{ fontSize: '24px' }}></i>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <b style={{ fontSize: '20px', fontFamily: 'bolder' }}>Loctaion:</b>
        <h>{state.eventdetails.exactloc}</h>
        <h>{state.eventdetails.location}</h>
      </div>
    </div>
  </section>
</div>
<div style={{marginLeft:'-50px',marginTop:'50px'}}>
<b style={{margin:"30px",fontSize:"40px",fontFamily:'bolder'}}>About the Event: </b>
        <p style={{fontSize:"19px",marginLeft:'40px',width:'600px',marginTop:"30px"}}>Hawaii is a state in the Western United States, about 2,000 miles from the U.S. mainland in the Pacific Ocean. It is the only U.S. state outside North America, the only state that is an archipelago, and the only state in the tropics.</p>
        </div>
        <div style={{marginLeft:'-50px',marginTop:'50px'}} >
<b style={{margin:"30px",fontSize:"40px",fontFamily:'bolder'}}>About Event Organizer: </b>
        <p  style={{fontSize:"19px",marginLeft:'40px',width:'600px',marginTop:"30px"}}>Hawaii is a state in the Western United States, about 2,000 miles from the U.S. mainland in the Pacific Ocean. It is the only U.S. state outside North America, the only state that is an archipelago, and the only state in the tropics.</p>
        </div>
        {/* <b style={{marginTop:"30px",fontSize:"40px"}}>{state.eventdetailsname}</b>
        <b style={{marginTop:"30px",fontSize:"40px"}}>{state.eventdetails.description}</b>
    <p style={{marginTop:"30px",width:"200px",height:"50px"}}>tickete remaining 5</p>
        <p style={{marginTop:"30px",width:"200px",height:"50px"}}>Ticket price 100rs</p> */}
       
 </div>
 </div>
 </div>
 </div>

 {/* </div>
 </div> */}
 
 <div style={{marginBottom:'500px'}} >
 <Comments eventdetails={state.eventdetails} userdetails={state.userdetails} />
 </div>
 <div>
 
 </div>
       </>
    )
}