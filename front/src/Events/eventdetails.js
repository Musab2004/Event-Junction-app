import { useEffect,useState,Component } from "react";
import {Navlink,useNavigate,useLocation} from "react-router-dom"

import Comments from '../comment_Forum/Comments'
import Navbar from '../Components/Navbar'
import avatar from '../download.png'
export default function Eventdetails(){
  let ticket_message=""
  const[logincheck,setcheck]=useState({
    data:null,error:""
  });
  const[logincheck1,setcheck1]=useState({
    data:null,error1:""
  });
  const[logincheck2,setcheck2]=useState({
    data:null,error2:""
  });
    const {state} = useLocation();
    console.log(state)
    // const eventdetails=state.eventdetails
    let eventdetails=state.eventdetails
    let username=state.userdetails.email
    let eventid=state.eventdetails._id
    const date = new Date();
    
    let day = date.getDate()-2;
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
        setcheck({error:"incorrect credentials"});
        const data= await res.json();
        ticket_message=res.error
        if(res.error=="Ticketes are already sold"){

        }
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
        setcheck1({error1:"incorrect credentials"});
        const data= await res.json();
        console.log(data)
  
    
    }
    useEffect(() => {
    const getevent= async ()=>{
      // e.preventDefault();
      const res = await fetch("/getoneevent",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          eventid
        })
        
     
        });
        const data= await res.json();
     eventdetails=data
     state.eventdetails.ticketbought=eventdetails.ticketbought
        console.log("number of tickets : ",eventdetails.ticketbought)
  
    
    }
    getevent()
 
});


useEffect(() => {
  const intervalId = setInterval(() => {
    // call your function here
    setcheck1({error2:""});
    setcheck1({error1:""});
    setcheck({error:""});

  }, 3000);

  return () => clearInterval(intervalId); // cleanup function to clear the interval on unmount
}, []);
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

let { data, error } = logincheck;
let { data1, error1 } = logincheck1;
let { data2, error2 } = logincheck2;
    return (
        <>
        <div>
        <Navbar userdetails={ state.userdetails }/>
        </div>
        {error &&  <div class="container fixed-top" style={{width:'100%' ,marginTop:'9%',marginLeft:'60%'}}> 
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Event ticket bought!</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert"  aria-label="Close"></button>
</div>
</div> }
{error1 &&  <div class="container fixed-top" style={{width:'100%' ,marginTop:'9%',marginLeft:'60%'}}> 
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Event Saved!</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</div> }
{error2 &&  <div class="container fixed-top" style={{width:'100%' ,marginTop:'9%',marginLeft:'60%'}}> 
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>All Tickets Sold!</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert"aria-label="Close"></button>
</div>
</div> }
 
  <div style={{marginTop:'15%'}}>
  <b style={{margin:"0px",fontSize:"40px",fontFamily:'bolder'}}>{state.eventdetails.name} </b>
  <div>
        <h style={{margin:"0px",color:"blue",fontSize:"15px",fontFamily:'bolder'}}>{state.eventdetails.Orgname} </h>
        </div>
  </div>
        <div>
        <img
  src={state.eventdetails.myFile}
  style={{
    marginLeft: "0px",
    marginTop: '5%',
    width: "700px",
    height: "300px",
    borderRadius: "10px",
    border: "2px solid black", // Change borderBlockColor to borderColor
  }}
  className="img-fluid"
  alt="Responsive image"
/>


        </div>
          <div class="container1 h-100"style={{marginTop:"0px",width:"800px",marginLeft:"320px"}}>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-15 col-xl-15">
     {state.eventdetails.username!=state.userdetails.email && <form   class="fixed-top" style={{marginLeft:"78%",marginTop:'20%',width:"250px",height:'200px'}}  
  >
    <p>Ticket Remaining : {state.eventdetails.numtickets-state.eventdetails.ticketbought}</p>
      <p>Ticket price : {state.eventdetails.ticket}</p>
      <button onClick={PostData} className="comment-form-button" style={{backgroundColor:'black'}}>
        Buy Ticket
      </button>
      <button className="comment-form-button"  onClick={Saveevent}style={{marginTop:'20px',backgroundColor:'black'}} >
        Save event
      </button>
    </form>}
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
      <i class="fas fa-calendar fa-lg me-3 fa-fw" style={{ fontSize: '28px' }}></i>
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
      <i class="fas fa-map-marker-alt fa-lg me-3 fa-fw" style={{ fontSize: '28px' }}></i>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <b style={{ fontSize: '20px', fontFamily: 'bolder' }}>Location:</b>
        <h>{state.eventdetails.exactloc}</h>
        <h>{state.eventdetails.location}</h>
      </div>
    </div>
  </section>
</div>
<div style={{marginLeft:'-50px',marginTop:'50px'}}>
<b style={{margin:"30px",fontSize:"40px",fontFamily:'bolder'}}>About the Event: </b>
        <p style={{fontSize:"19px",marginLeft:'40px',width:'600px',marginTop:"30px"}}>{state.eventdetails.description}</p>
        </div>
        <div style={{marginLeft:'-50px',marginTop:'50px'}} >
<b style={{margin:"30px",fontSize:"40px",fontFamily:'bolder'}}>About Event Organizer: </b>
<p style={{fontSize:"19px",marginLeft:'40px',width:'600px',marginTop:"30px"}}>Organizer Name : {state.eventdetails.username}</p>
<p style={{fontSize:"19px",marginLeft:'40px',width:'600px',marginTop:"10px"}}>Organization Name: {state.eventdetails.Orgname}</p>
        {/* <p  style={{fontSize:"19px",marginLeft:'40px',width:'600px',marginTop:"30px"}}>Hawaii is a state in the Western United States, about 2,000 miles from the U.S. mainland in the Pacific Ocean. It is the only U.S. state outside North America, the only state that is an archipelago, and the only state in the tropics.</p> */}
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