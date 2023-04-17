
import React from 'react'
import img3 from'./index9.webp'
import img5 from'./google.png'
import img4 from'./d6.jpg'
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
  const f1= async (e)=>{
    (navigate("/profile",{state:{ userdetails:props.userdetails }}))
  }
  const todashboard= async (e)=>{
    (navigate("/dashboard",{state:{ userdetails:props.userdetails }}))
  }
  const tofindevent= async (e)=>{
    (navigate("/FindEvent",{state:{  userdetails:props.userdetails }}))
  }
  const logout= async (e)=>{
    (navigate("/Login"))
  }
    return(
  
        <div>
      <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light" style={{right:"20%",top:'0px',width:"100%"}}>
  
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
      
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src={img5}
          height="50"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li>
        <button class="btn1" onClick={todashboard} >Create Event +</button> 
        </li> */}
        <div class="input-group"style={{width:'90%'}}>
  <input type="search"  
          onClick={tofindevent}class="form-control rounded" placeholder="Search Anything" aria-label="Search" aria-describedby="search-addon" />
  <button type="button"style={{marginTop:'-0.1%',width:'30%'}} onClick={tofindevent} class="btn btn-outline-primary">search</button>
</div>
<li>
        <button class="btn1" onClick={todashboard} >Create Event +</button> 
        </li>
      </ul>
      
    </div>


    
    <div class="d-flex align-items-center">
    
      <a class="text-reset me-3" href="#">
     
        <i class="zmdi zmdi-shopping-cart zmdi-hc-2x" ></i>
      </a>

     
      <div class="dropdown">
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
      
          {/* <span class="badge rounded-pill badge-notification bg-danger">1</span> */}
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
      </div>
  
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
            <img
            src={props.userdetails.myFile|| avatar}
            class="rounded-circle"
            height="40"
            alt="Black and White Portrait of a Man"
            loading="lazy"
            
          
          />
          {/* <i1 className="zmdi zmdi-notifications zmdi-hc-2x" >
        
          </i1> */}
      
          {/* <span class="badge rounded-pill badge-notification bg-danger">1</span> */}
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
           <li>
            <a onClick={f1} class="dropdown-item" >My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
          <a class="dropdown-item" onClick={logout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
 
</nav>
</div>


        













    )
}