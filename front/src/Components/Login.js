import React,{useState} from "react"
import {useEffect} from "react";
import {Navlink,useNavigate} from "react-router-dom"
import logo from '../logo.svg';
import anotheron from '../index.svg';
import axios from "axios";
import { redirect } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route,Link,Switch } from "react-router-dom"
import Signup from "./Signup";
import img4 from'./new3.jpeg'
import img6 from'./loginimage.jpg'
import img5 from'./google.png'
import { Navigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import '../App.css'



const Container = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
       {children}
    </div>
  );
};

const LeftContainer = ({ children }) => {
  return (
    <div style={{ flex: 1 ,marginLeft:'-200px'}}>
    {children}
      
    </div>
  );
};

const RightContainer = ({ children }) => {
  return (
    <div style={{ flex: 1,marginLeft:'-800px' }}>
      {children}
    </div>
  );
};
const Login =()=> {
  window.history.pushState(null, document.title, window.location.href);

  window.addEventListener('popstate', function (event)
  
  {
  
    window.history.replaceState(null, null, '/Login');
  
  });
  const navigate = useNavigate();
  // this.props.navigation.popToTop();
  const[logincheck,setcheck]=useState({
    data:null,error:""
  });
  const[user,setuser]=useState({
    email:"",password:""
  });
  const [message, setmessage] = useState({
    message:""
  });
  let name,value;
  const handleinputs= async(e)=>{
    name=e.target.name
    value=e.target.value
    setuser({... user,[name]:value});
   
  } 

   const PostData= async(e)=>{
    e.preventDefault();
    
    
    const{email,password}=user;
   const res= await fetch("/Logine",{
   method:"POST",
   headers:{
     "Content-Type":"application/json"
   },
   body:JSON.stringify({
     email,password
   })
   
  
    })    
   
    try {
      const data= await res.json();
      
      if(res.status==422){
      setcheck({error:"incorrect credentials"});
      }
      else{
        setcheck({data});
      }
    } catch (error) {
    // setcheck({ da});
    }
   
   

 

   } 

   


console.log(message.message)


let { data, error } = logincheck;
const f3= async (e)=>{
  // setcheck({error:"incorrect credentials"});
  (navigate("/",{state: {userdetails:null}}))
}
    return (
        <>
        <Container>
      <LeftContainer >      
  <div class="container2 h-100" style={{width:"50%",marginLeft:"5%",marginTop:"10%"}}>
    <div class="row d-flex justify-content-center align-items-center h-200">
      <div class="col-lg-20 col-xl-20">
      {error!="" && <p  style={{color:'red'}}>{error}</p>}
      {data && (navigate("/Home",{state: {userdetails:data}}))}
       
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-10 col-xl-10 order-2 order-lg-2"></div>
              <img
          src={img5}
          height="50"
          alt="MDB Logo"
          loading="lazy"
          style={{width:'150px',marginRight:'81%',height:'100px'}}
        />
<b style={{fontSize:"40px",fontFamily:'bolder', margin:"2%"}}>Login</b>
<div style={{width:'40%',marginRight:'60%'}}>
  <div class="form-outline mb-4">
    
  <MDBInput wrapperClass='mb-4'value={user.email} name="email" label='Email' id='form4' type='email' onChange={handleinputs} />
  
  </div>


  <div class="form-outline mb-4" >
  <MDBInput wrapperClass='mb-4'value={user.password} name="password" label='Password' id='form4' type='password' onChange={handleinputs} />
  </div>
  </div>
 
  <div class="row mb-4">
    {/* <div class="col d-flex justify-content-center"> */}
     
      {/* <div class="form-check" >
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div> */}

    <div class="col">
    
      <a href="#!"style={{marginTop:"10%"}}>Forgot password?</a>
    </div>
  </div>

<div >
  <button type="button" class="btn btn-dark" onClick={PostData} style={{width:'30%'}} >Log in</button>
  </div>

  <div class="text-center" >
    <p style={{marginTop:"10%",marginRight:'69%'}}>Not a member?  <Link to="/Signup">Register</Link></p>
    {/* <p style={{marginRight:'69%'}}>or sign up with:</p> */}
     {/* <div style={{marginRight:'49%'}}>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i style={{marginRight:'69%'}} class="fa fa-facebook-f"></i>
    </button>
   
    <button type="button"  class="btn btn-link btn-floating mx-1">
      <i class="zmdi zmdi-google"></i>
    </button>

    <button type="button"   class="btn btn-link btn-floating mx-1">
      <i class="fa fa-twitter"></i>
    </button>

    <button type="button"   class="btn btn-link btn-floating mx-1">
      <i class="fa fa-github " ></i>
    </button>
    </div> */}
  </div> 

</div>
</div>
</div>

</div>
</LeftContainer>
<RightContainer>
<div class="row d-flex justify-content-center align-items-center h-100">
      {/* <div class="col-lg-15 col-xl-15"> */}
   
        
 <div class="row justify-content-center">
             
          
     
   <div class="col-md-14 col-lg-14 col-xl-7 d-flex align-items-center order-1 order-lg-2">
   {/* src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" */}
   {/* <img src={img6} style={{width:"152%",marginLeft:'38.5%',marginTop:'15%',height:"150%"}}
                  class="img-fluid" alt="Sample image"></img> */}
  <img src={img6} style={{width:"130%",marginLeft:'43.7%',marginTop:'0%',marginBottom:'-25%',height:"120.5%"}}
                  class="img-fluid" alt="Sample image"></img>

              </div>
        </div>
         {/* </div> */}
       
</div>
   </RightContainer>
    </Container>
  
</> 

)

}


export default Login;