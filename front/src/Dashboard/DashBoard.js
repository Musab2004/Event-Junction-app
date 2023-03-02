import React from 'react'

import {Link,useNavigate,useLocation} from "react-router-dom"

import './dashboard.css'
import Marketing from './Marketing'
export default function Dashboard(){
 

  const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
   
return(


<>



<body id="body-pd">
    <header class="header" id="header">
    
        <div class="header_toggle"> <i class='fas fa-lock fa-fw me-3' id="header-toggle"></i> </div>
        <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""/> </div>
       
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> <a onClick={showNavbar} class="nav_logo"> <i onClick={showNavbar} class='fa fa-bars'></i> <span class="nav_logo-name">BBBootstrap</span> </a>
                <div class="nav_list"> 
                <Link to='/createevent' class="nav_link active123">
                   <i class='fas fa-money-bill fa-fw me-3'></i> 
                   <span class="nav_name">Create event</span> </Link> 
                   <Link to='/events' class="nav_link"> 
                   <i class='fas fa-money-bill fa-fw me-3'></i> 
                   <span class="nav_name">Users</span> 
                   </Link> 
                   <Link to="/eventreports" class="nav_link"> 
                   <i class='fas fa-building fa-fw me-3'></i> 
                   <span class="nav_name">Event Reports</span> </Link> 
                   <a href="#" class="nav_link"> 
                   <i class='fas fa-users fa-fw me-3'></i>
                    <span class="nav_name">Manage Events</span> 
                    </a> </div>
            </div> 
            <a href="#" class="nav_link"> 
            <i class='fas fa-money-bill fa-fw me-3'></i>
             <span class="nav_name">SignOut</span> </a>
        </nav>
    </div>
   
    {/* <div class="height-100 bg-light">
        <h4>Main Components</h4>
    
        <h1 style={{margin:'100px'}}>MArketing Dtuff</h1>
        <h></h>
       
    </div> */}
   
    </body>
  </>


    )
}