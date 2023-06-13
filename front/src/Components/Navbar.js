
import React from 'react'

import img5 from'./google.png'

import {Link,Navlink,useNavigate,useLocation} from "react-router-dom"

import avatar from '../download.png'
import './homepage.css'
export default function Navbar(props){
  const navigate = useNavigate();

  // console.log(props)
  // const { email, password } = state;
  //  console.log(props.data)
  //  console.log(props.email)
  //  console.log(props.name)
  // console.log(password)
  console.log(props)
  const f1= async (e)=>{
    (navigate("/profile",{state:{ userdetails:props.userdetails }}))
  }
  const todashboard= async (e)=>{
    // const tocreateevents= async (e)=>{
      (navigate("/createevent",{state:{userdetails:props.userdetails }}))
    // }
    // (navigate("/dashboard",{state:{ userdetails:props.userdetails }}))
  }
  const tofindevent= async (e)=>{
    (navigate("/FindEvent",{state:{  userdetails:props.userdetails }}))
  }
  const logout= async (e)=>{
    (navigate("/Login"))
  }
  const toHome= async (e)=>{
    (navigate("/Home",{state:{  userdetails:props.userdetails }}))
  }
 
    return(
  
        <div>
      <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light" style={{right:"20%",top:'0px',width:"100%",height:'70px'}}>
  
  <div class="container-fluid">
    
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <a class="navbar-brand mt-2 mt-lg-0" onClick={toHome}href="">
        <img
          src={img5}
          height="50"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{width:'70%'}}>
        <div class="nav-item" style={{width:'15%'}}>
          <h class="nav-link" style={{fontSize:'15px',cursor: 'pointer'}} href="" onClick={toHome} >Homepage</h>
        </div>
        <div class="nav-item" style={{width:'20%'}}>
          <h class="nav-link" style={{fontSize:'15px',width:'150px',cursor: 'pointer'}} href="" onClick={tofindevent}  >Browse Event</h>
        </div>
        <div class="nav-item" style={{width:'20%'}}>
          <h class="nav-link" style={{fontSize:'15px',width:'150px',cursor: 'pointer'}} href="" onClick={todashboard} >Create Event</h>
        </div>
        {/* <li style={{width:'20%'}}>
        <button class="btn1" onClick={todashboard} >Create Event +</button> 
        </li> */}
        {/* <div class="input-group"style={{width:'90%',marginLeft:'30%'}}>
  <input type="search"  
          onClick={tofindevent}class="form-control rounded" placeholder="Search Anything" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" style={{marginTop:'-0.1%',width:'30%'}} onClick={tofindevent} class="btn btn-outline-primary">search</button>
</div> */}
<li>
        {/* <button class="btn1" style={{marginTop:'100px'}}onClick={todashboard} >Create Event +</button>  */}
        </li>
      </ul>
      
    </div>


    
    <div class="d-flex align-items-center" style={{marginTop:'25px'}}>
    
      {/* <a class="text-reset me-3" href="#">
     
        <i class="zmdi zmdi-shopping-cart zmdi-hc-2x" ></i>
      </a> */}

     
      {/* <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
       
          <i1 className="zmdi zmdi-notifications zmdi-hc-2x" >
        
          </i1>
      
          
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
           <li>
            <a onClick={f1} class="dropdown-item" >My profile My profile My profile My profile My profile My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" onClick={logout}>Logout</a>
          </li>
        </ul>
      </div> */}
  
  <div class="dropdown" >
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
         <div class="dropdown">
         
  <button class="btn btn-light dropdown-toggle rounded-pill border-success" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}
  
  <img
            src={props.userdetails.myFile|| avatar}
            class="rounded-circle"
            height="30"
            alt="Black and White Portrait of a Man"
            loading="lazy"
            style={{marginRight:'20px'}}
          
          />
             
    {props.userdetails.name}
  
  </button>

</div>


      
 
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
          style={{marginTop:'-15%'}}
        >
           <div>
            <h onClick={f1} class="dropdown-item" style={{cursor: 'pointer'}} href="" >My profile</h>
          </div>
          <div>
            <h  onClick={todashboard}class="dropdown-item" style={{cursor: 'pointer'}} href="" >Switch to Manage events</h>
          </div>
          <li>
            <Link to='/Login' class="dropdown-item" style={{cursor: 'pointer'}} onClick={logout} >Logout</Link>
          </li>
        </ul>
      </div>
      </div>
      </div>
      </nav>
      </div>












    )
}