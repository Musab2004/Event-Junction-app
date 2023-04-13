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
import Profilepage from './Components/Profilepage';
import Homepage from './Components/homepage';
import Comments from './comment_Forum/Comments'
import Dashboard from './Dashboard/DashBoard';
import Marketing from './Dashboard/Marketing';
import Events from './Dashboard/Events';
import EventReports from './Dashboard/EventReports';
import CreateEvent from './Dashboard/create_event';
import Shop from './Events/Shop';
import Eventdeatils from './Events/eventdetails';
import multiselect from './Events/multiselect'
import PaymentForm from './Events/PaymentForm';
import Maps from './Dashboard/Maps';
import Profile from './Profile/Profile';
// import Marketing from './Components/Dashboard/Marketing';

function App() {
  const [selectPosition, setSelectPosition] = useState(null);
  return (
   <>
     <div style={{ width: "50vw", height: "100%" }}>
        <Maps selectPosition={selectPosition} />
      </div>
   <Router>
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
                 <Route exact path='/' element={< multiselect/>}></Route>
                 <Route exact path='/tickets' element={< PaymentForm/>}></Route>
                 <Route exact path='/map' element={< Maps/>}></Route>
                 <Route exact path='/profile' element={< Profile/>}></Route>
                 <Route path='/FindEvent' element={< FindEvent/>}></Route>
          </Routes>
          </Router>
  
    </>
  );
}

export default App;
