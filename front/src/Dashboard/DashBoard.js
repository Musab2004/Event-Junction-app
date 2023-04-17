
import React,{useState} from "react"
import {Link,useNavigate,useLocation} from "react-router-dom"
import img5 from'../Components/google.png'
import './dashboard.css'
import avatar from '../download.png'
import Marketing from './Refund'
import { Navbar } from "react-bootstrap"
export default function Dashboard(props){
    window.addEventListener('popstate', function (event)

    {
    
      window.history.replaceState(null, null, '/Login');
    
    });
    const[user,setuser]=useState({
      
    });
   let { state} = useLocation();
    let email;
    let name;
    console.log("props ",props)
    console.log("state :",state)
  
    const propKeys = Object.keys(props);
    const propCount = propKeys.length;
    console.log("props length :",propCount)
    if(propCount!=0){
      console.log("props are empty")
      state=null
    }
    if(state==null ){
     email=props.data.email
     name=props.data.name
    }
    else{
     email=state.userdetails.email
     name=state.userdetails.name
    }
    console.log(email)

    const navigate = useNavigate();
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
    //  const tocreateevent= async (e)=>{
    //     (navigate("/createevent",{state:{ userdetails:state.userdetails }}))
    //   }
    const f1= async (e)=>{
        (navigate("/profile",{state:{ userdetails:props.userdetails }}))
      }
return(


<>



<body id="body-pd">
    <header class="header" id="header">
    <a class="navbar-brand mt-2 mt-lg-0" style={{marginLeft:'-10%'}} href="#">
        <img
          src={img5}
          height="50"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
        {/* <div class="header_toggle"> <i class='fas fa-lock fa-fw me-3' id="header-toggle"></i> </div> */}
        <div class="dropdown">
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
  <i class="fas fa-user fa-lg me-3 fa-fw"></i>
    {name}
    <h> </h> 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>


      
 
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
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
       
    </header>
   
    <div class="l-navbar" style={{width:'10%',marginTop:'2.5%'}} id="nav-bar">
        <nav class="nav">
            <div> 
              {/* <a onClick={showNavbar} class="nav_logo">
                 <i onClick={showNavbar} class='fa fa-bars'></i> 
                 <span class="nav_logo-name">DashBoard</span> </a> */}
                <div class="nav_list"> 
                <div style={{marginTop:'20%'}}>
                <Link to={{pathname: "/createevent", search:`?email=${email}&name=${name}`}} class="nav_link active123">
                   <i class='fas fa-money-bill fa-fw me-3'></i> 
                   <b  class="nav_name"style={{fontSize:'20px'}} >Create event</b></Link> 
                   </div>
                   <hr style={{color:'white'}}/>
                   {/* <Link to={{pathname: "/events", search:email}} class="nav_link"> 
                   <i class='fas fa-money-bill fa-fw me-3'></i> 
                   <span class="nav_name">Users</span> 
                   </Link>  */}
                   <div style={{marginTop:'20%'}}>
                   <Link onClick={f1} to={{pathname: "/eventreports", search:`?email=${email}&name=${name}`}} class="nav_link"> 
                   <i class='fas fa-building fa-fw me-3'></i> 
                   <b class="nav_name" style={{fontSize:'20px'}}>Event Reports</b> </Link> 
                   </div>
                   <hr style={{color:'white'}}/>
                   <div style={{marginTop:'20%'}}>

                   <Link to={{pathname: "/events", search:`?email=${email}&name=${name}`}} class="nav_link"> 
                   <i class='fas fa-users fa-fw me-3'></i>
                    <b class="nav_name" style={{fontSize:'20px'}}>Manage Events</b> 
                    </Link>
                    </div>
                    <hr style={{color:'white'}}/>
                    <div style={{marginTop:'20%'}}>
                    <Link to={{pathname: "/refund", search:`?email=${email}&name=${name}`}}class="nav_link"> 
                   <i class='fas fa-users fa-fw me-3'></i>
                    <b class="nav_name" style={{fontSize:'20px'}}>Refund Requests</b> 
                    </Link>
                    </div>
                    <hr style={{color:'white'}}/>
                     </div>
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