import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import {useEffect,useState} from "react";
import './App.css';
import Navbar from './Components/Navbar';
import SignupForm from './Components/Signup';
import { BrowserRouter as Router, Routes, Route,Link,Switch } from "react-router-dom";
import {S} from "react-dom"
import Login from './Components/Login';
import Signup from './Components/Signup';
import Signupstep2 from './Components/Signupnstep2';
import FindEvent from './Components/FindEvent';

import Homepage from './Components/homepage';
import Comments from './comment_Forum/Comments'
import Dashboard from './Dashboard/DashBoard';
import Marketing from './Dashboard/Refund';
import Events from './Dashboard/Events';
import EventReports from './Dashboard/EventReports';
import CreateEvent from './Dashboard/create_event';
import EditEvent from './Dashboard/EditEvent';
import Shop from './Events/Shop';
import Eventdeatils from './Events/eventdetails';

import Profile from './Profile/Profile';
import EditProfile from './Profile/EditProfile';
import Refund from './Dashboard/Refund';
import LandingPage from './Components/LandingPage';

// import Marketing from './Components/Dashboard/Marketing';

import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import {Navlink,useNavigate,useLocation} from "react-router-dom"
import "./index.css";



function App() {

  // const [showLandingPage, setShowLandingPage] = useState(true);

  // function handleNavigateAway() {
  //   setShowLandingPage(false);
  // }

  // handleNavigateAway()
  return (
   <>
   
   {/* <div style={{ backgroundColor: '#001'}} > 
   <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Others/architecture.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </MDBAnimation>
                </MDBCol>
                </div> */}

       
        
   <Router>

     
   
       {/*  <div>
          
        {  <Login/>}
         </div>  */}
       
     
     <Routes>
   

     <Route exact path='/Home' element={< Homepage />}></Route>
                 <Route exact path='/Signup' element={< Signup />}></Route>
                 <Route exact path='/Signupstep2' element={< Signupstep2 />}></Route>
                 <Route exact path='/Login' element={< Login />}></Route>
                 <Route exact path='/comment' element={< Comments />}></Route>
                 <Route exact path='/dashboard' element={< Dashboard />}></Route>             
                 <Route exact path='/events' element={< Events />}></Route>
                 <Route exact path='/eventreports' element={< EventReports/>}></Route>
                 <Route  path='/createevent' element={< CreateEvent/>}></Route>
                 <Route exact path='/showevents' element={< Shop/>}></Route>
                 <Route exact path='/eventdetails' element={< Eventdeatils/>}></Route>
                
                 <Route exact path='/' element={< App/>}></Route>
              
             
                 <Route exact path='/profile' element={< Profile/>}></Route>
                 <Route path='/FindEvent' element={< FindEvent/>}></Route>
                 <Route path='/refund' element={< Refund/>}></Route>
                 <Route exact path='/editprofile' element={< EditProfile/>}></Route>
                 <Route exact path='/editevent' element={< EditEvent/>}></Route>
          </Routes>
          </Router>
        



        
  
    </>
  );
}

export default App;
