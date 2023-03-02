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




const Login =()=> {
  const navigate = useNavigate();
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
    return (
        <>
              {/* <div class="form-floating mb-3" style={{}}>
  <input type="text" id="form12" class="form-control" />
  <label class="form-label" for="form12">Example label</label>
</div> */}
       {/* <section className="Sigup">
       <div className="container mt-5">
       {error!="" && <p  style={{color:'red'}}>{error}</p>}
        {data && (navigate("/Home",{state: { email:data.email , password: data.password }})
          // <Navigate to="/Home" replace={true} /> 
        )}
        
<form>

  <div class="form-outline mb-1"style={{margin:'5px'}}>
    <input type="email" id="form2Example1" class="form-control" value={user.email} name="email" onChange={handleinputs} />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  
  <div class="form-outline mb-4" style={{margin:'5px'}}>
    <input type="password" id="form2Example2" class="form-control" value={user.password} name="password" onChange={handleinputs} />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  
  <div class="row mb-4"style={{margin:'5px'}}>
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
     
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <div class="col-md-5 text-center">
  


     </div>
 
  <div class="text-center">
  <Link to="/Home">
  <button style={{margin:'30px'}}type="button" class="btn btn-primary btn-block btn-sm" onClick={PostData}>Sign in</button>
  </Link>
    <p>Not a member? <Link to="/Signup">Register</Link></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1"style={{margin:'5px'}}>
      <i class="zmdi zmdi-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="zmdi zmdi-facebook"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="zmdi zmdi-github"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="zmdi zmdi-google"></i>
    </button>
  </div>
</form>
</div>
</section>
</> */}
  <div class="container2 h-100" style={{width:"1000px",marginLeft:"500px",marginTop:"200px"}}>
    <div class="row d-flex justify-content-center align-items-center h-200">
      <div class="col-lg-20 col-xl-20">
      {error!="" && <p  style={{color:'red'}}>{error}</p>}
        {data && (navigate("/Home",{state: { email:data.email , password: data.password }})
          // <Navigate to="/Home" replace={true} /> 
        )}
        <div class="card text-black" >
          <div class="card-body p-md-10" >
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-10 col-xl-10 order-2 order-lg-2"></div>
<form>
<b style={{fontSize:"40px", margin:"10px"}}>Login</b>
  <div class="form-outline mb-4"style={{width:"400px"}}>
    
  <MDBInput wrapperClass='mb-4'value={user.email} name="email" label='Email' id='form4' type='email' onChange={handleinputs} />
  
  </div>


  <div class="form-outline mb-4" style={{width:"400px"}}>
  <MDBInput wrapperClass='mb-4'value={user.password} name="password" label='Password' id='form4' type='password' onChange={handleinputs} />
  </div>

 
  <div class="row mb-4">
    {/* <div class="col d-flex justify-content-center"> */}
     
      {/* <div class="form-check" >
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div> */}

    <div class="col">
    
      <a href="#!">Forgot password?</a>
    </div>
  </div>


  <button type="button" class="btn btn-primary" onClick={PostData} >Log in</button>


  <div class="text-center" >
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button"class="btn btn-link btn-floating mx-1">
      <i class="fa fa-facebook-f"></i>
    </button>
   
    <button type="button"  class="btn btn-link btn-floating mx-1">
      <i class="zmdi zmdi-google"></i>
    </button>

    <button type="button"  class="btn btn-link btn-floating mx-1">
      <i class="fa fa-twitter"></i>
    </button>

    <button type="button"   class="btn btn-link btn-floating mx-1">
      <i class="fa fa-github " ></i>
    </button>
    
  </div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</> 

)

}


export default Login;