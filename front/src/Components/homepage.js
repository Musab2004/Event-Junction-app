import React from 'react'


import img3 from'./index9.webp'
import img4 from'./pic1.jpg'
import {Navlink,useNavigate,useLocation} from "react-router-dom"
import Navbar from './Navbar'
import './homepage.css'
import Dashboard from '../Dashboard/DashBoard'
import Shop from '../Events/Shop'
export default function Homepage(){


    return(

<>
<Navbar/>
<div class="container" style={{width:"2000px",height:"2000px"}} >
<img
            src={img4}
            // class="rounded-circle"
            style={{right:"-1000px"}}
            marginRight="-1000px"
            height="500"
            width="3000"
            alt="Black and White Portrait of a Man"
            loading="lazy"
            
          >  
          </img>
          <button class="btn" to='/dashboard'>Browse Event</button> 
          
     
</div>
<div class="container1 h-100"style={{marginTop:"600px",marginLeft:"500px",width:"1100px"}}>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-15 col-xl-15">
   
        {/* <div class="card text-black" >
          <div class="card-body p-md-15"> */}
            
        
 <div style={{marginRight:"10px",marginTop:"10px"}}>
 <b style={{fontSize:"40px"}}>Events going on:</b>    
 <Shop/> 
     </div>       
     </div>   
     </div>   
     </div>   
     {/* </div>   
     </div>    */}
  



</>



    )
}