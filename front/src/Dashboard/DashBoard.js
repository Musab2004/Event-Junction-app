
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
    const[userdetails,setuser]=useState({
      email:"",name:"",myFile:"",interest:null,locations:""
    });
   let { state} = useLocation();
    // let email;
    // let name;
    // let myFile;
    // let interest;
    // let locations;
    // console.log("props ",props)
    // console.log("state :",state)
    // console.log(props)
    // const propKeys = Object.keys(props);
    // const propCount = propKeys.length;
    // console.log("props length :",propCount)
    // if(propCount!=0){
    //   console.log("props are empty")
    //   state=null
    // }
    // if(state==null ){
    //  email=props.userdetails.email
    //  name=props.userdetails.name
    //  myFile=props.userdetails.myFile
    //  locations=props.userdetails.locations
    //  interest=props.userdetails.interest
    //  userdetails.name=props.userdetails.name
    //  userdetails.email=props.userdetails.email
    //  userdetails.interest=props.userdetails.interest
    //  userdetails.locations=props.userdetails.locations
    //  userdetails.myFile=props.userdetails.myFile
    // }
    // else{
    //  email=state.userdetails.email
    //  name=state.userdetails.name
    //  myFile=state.userdetails.myFile
    //  locations=state.userdetails.locations
    //  interest=state.userdetails.interest
    //  userdetails.name=state.userdetails.name
    //  userdetails.email=state.userdetails.email
    //  userdetails.interest=state.userdetails.interest
    //  userdetails.locations=state.userdetails.locations
    //  userdetails.myFile=state.userdetails.myFile
    // }
    let email=state.userdetails.email
    let name=state.userdetails.name
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
    const toprofile= async (e)=>{
        (navigate("/profile",{state:{ userdetails:state.userdetails}}))
      }
      const toHomepage= async (e)=>{
        (navigate("/Home",{state:{  userdetails:state.userdetails }}))
      }
      const logout= async (e)=>{
        (navigate("/Login"))
      }
      const tomanageevents= async (e)=>{
        (navigate("/events",{state:{ userdetails:state.userdetails}}))
      }
      const tocreateevents= async (e)=>{
        (navigate("/createevent",{state:{userdetails:state.userdetails }}))
      }
      const torefunds= async (e)=>{
        (navigate("/refund",{state:{userdetails:state.userdetails }}))
      }
      const toeventreports= async (e)=>{
        (navigate("/eventreports",{state:{userdetails:state.userdetails }}))
      }
      const todashboard= async (e)=>{
        (navigate("/dashboard",{state:{ userdetails:state.userdetails }}))
      }
      const tofindevent= async (e)=>{
        (navigate("/FindEvent",{state:{  userdetails:state.userdetails }}))
      }
  
      const toHome= async (e)=>{
        (navigate("/Home",{state:{  userdetails:state.userdetails }}))
      }
      const f1= async (e)=>{
   
      }
return(


<>



<body id="body-pd">
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
      
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src={img5}
          height="50"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{width:'60%'}}>
        <li class="nav-item" style={{width:'14%'}}>
          <a class="nav-link" style={{fontSize:'15px'}}  onClick={toHome} >Homepage</a>
        </li>
        <li class="nav-item" style={{width:'14%'}}>
          <a class="nav-link" style={{fontSize:'15px'}} onClick={tofindevent}  >Browse Event</a>
        </li>
        <li class="nav-item" style={{width:'14%'}}>
          <a class="nav-link" style={{fontSize:'15px'}} onClick={todashboard} >Create Event</a>
        </li>
        {/* <li style={{width:'20%'}}>
        <button class="btn1" onClick={todashboard} >Create Event +</button> 
        </li> */}
        <div class="input-group"style={{width:'90%',marginLeft:'10%'}}>
  <input type="search"  
          onClick={tofindevent}class="form-control rounded" placeholder="Search Anything" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" style={{marginTop:'-0.1%',width:'30%'}} onClick={tofindevent} class="btn btn-outline-primary">search</button>
</div>
<li>
        {/* <button class="btn1" style={{marginTop:'100px'}}onClick={todashboard} >Create Event +</button>  */}
        </li>
      </ul>
      
    </div>


    
    <div class="d-flex align-items-center" style={{marginTop:'25px'}}>
    
     
  
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
            src={state.userdetails.myFile|| avatar}
            class="rounded-circle"
            height="30"
            alt="Black and White Portrait of a Man"
            loading="lazy"
            style={{marginRight:'20px'}}
          
          />
             
    {state.userdetails.name}
  
  </button>

</div>


      
 
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
           <li>
            <a onClick={toprofile} class="dropdown-item" >My profile</a>
          </li>
          <li>
            <a  onClick={toHomepage}class="dropdown-item" >Switch to attending</a>
          </li>
          
          <li>
            <a class="dropdown-item" onClick={logout} href="#">Logout</a>
          </li>
        </ul>
      </div>
      </div>
      </div>
      </nav>
    {
    
    /* <header class="header" id="header">
    <a class="navbar-brand mt-2 mt-lg-0" style={{marginLeft:'-10%'}} href="#">
        <img
          src={img5}
          height="50"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{width:'60%'}}>
        <li class="nav-item" style={{width:'14%'}}>
          <a class="nav-link" style={{fontSize:'15px'}}  onClick={toHome} >Homepage</a>
        </li>
        <li class="nav-item" style={{width:'14%'}}>
          <a class="nav-link" style={{fontSize:'15px'}} onClick={tofindevent}  >Browse Event</a>
        </li>
        <li class="nav-item" style={{width:'14%'}}>
          <a class="nav-link" style={{fontSize:'15px'}} onClick={todashboard} >Create Event</a>
        </li>
    
      
<li>
        
        </li>
      </ul>
       
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
 
  <img
            src={state.userdetails.myFile|| avatar}
            class="rounded-circle"
            height="40"
            alt="Black and White Portrait of a Man"
            loading="lazy"
            
          
          />
    {state.userdetails.name}
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
            <a onClick={toprofile} class="dropdown-item" >My profile</a>
          </li>
          <li>
            <a onClick={toHomepage} class="dropdown-item" >Switch to attending</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" onClick={logout} href="#">Logout</a>
          </li>
        </ul>
      </div>
       
    </header>
    */}
    <div class="l-navbar" style={{width:'10%',marginTop:'2.5%'}} id="nav-bar">
        <nav class="nav">
            <div> 
              {/* <a onClick={showNavbar} class="nav_logo">
                 <i onClick={showNavbar} class='fa fa-bars'></i> 
                 <span class="nav_logo-name">DashBoard</span> </a> */}
                <div class="nav_list"> 
              
              
                   {/* <Link to={{pathname: "/events", search:email}} class="nav_link"> 
                   <i class='fas fa-money-bill fa-fw me-3'></i> 
                   <span class="nav_name">Users</span> 
                   </Link>  */}
                
              
                  
                    <div style={{marginTop:'30%',marginLeft:'5%'}}>
                    
                    <div className="clickable" onClick={tocreateevents}> <i class='fas fa-users fa-fw me-3'></i> <b className="clickable"  style={{fontSize:'20px'}}>Create Event</b> </div>
                    </div>
                    <hr style={{color:'white'}}/>
                    <div style={{marginTop:'30%',marginLeft:'5%'}}>
                    
                    <div className="clickable" onClick={toeventreports}> <i class='fas fa-building fa-fw me-3'></i> <b className="clickable"  style={{fontSize:'20px'}}>Event Reports</b> </div>
                    </div>
                    <hr style={{color:'white'}}/>
                    <div style={{marginTop:'30%',marginLeft:'5%'}}>
                    
                    <div className="clickable" onClick={tomanageevents}> <i class='fas fa-users fa-fw me-3'></i> <b className="clickable"  style={{fontSize:'20px'}}>Manage Events</b> </div>
                    </div>
                    <hr style={{color:'white'}}/>
                    <div style={{marginTop:'30%',marginLeft:'5%'}}>
                    
                    <div className="clickable" onClick={torefunds}> <i class='fas fa-users fa-fw me-3'></i> <b className="clickable"  style={{fontSize:'20px'}}>Refund Requests</b> </div>
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