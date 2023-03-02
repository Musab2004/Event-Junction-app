
import React from 'react'
import img3 from'./index9.webp'
import img4 from'./d6.jpg'
import {Navlink,useNavigate,useLocation} from "react-router-dom"
import './homepage.css'
export default function Navbar(){
  const {state} = useLocation();
  // const { email, password } = state;
   console.log(state)
  // console.log(password)

    return(
  
        <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{right:"220px",top:"-54px",width:"2500px"}}>
  
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
          src={img3}
          height="50"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li>
        <button class="btn1" >Create Event +</button> 
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
          {/* <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"/> */}
          </i1>
      
          {/* <span class="badge rounded-pill badge-notification bg-danger">1</span> */}
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item"  href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item"  href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
  
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="40"
            alt="Black and White Portrait of a Man"
            loading="lazy"
            
          
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
 
</nav>
</div>


        













    )
}