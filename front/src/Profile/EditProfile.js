import React,{useState} from "react"
import {useEffect} from "react";
import {Navlink,useNavigate,useLocation} from "react-router-dom"
import logo from '../logo.svg';
import anotheron from '../index.svg';
import axios from "axios";
import { redirect } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Navigate } from "react-router-dom";

import Select from 'react-select';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  multiple,
  
}
from 'mdb-react-ui-kit';
// import '../App.css';
import avatar from '../download.png'
const options = [
    { value: "Lahore", label: "Lahore" },
    { value: "Multan", label: "Multan" },
    { value: "Karachi", label: "Karachi" },
    { value: "Islamabad", label: "Islamabad" }
  ];
  
const EditProfile =()=> {
    const [text, setText] = useState('Click me to edit'); // set the initial text state
    const [isEditing, setIsEditing] = useState(false); // set the initial editing state to false
    const [postImage, setPostImage] = useState( { myFile : ""})
    const [getImage, setgetImage] = useState( { myFile : ""})
    const handleClick = () => {
      setIsEditing(true); // set the editing state to true when the user clicks on the text
    };
  
    const handleBlur = (event) => {
      const newText = event.target.value; // get the new text from the input field
      setText(newText); // set the text state to the new text
      setIsEditing(false); // set the editing state back to false
    };
    const {state} = useLocation();
  const navigate = useNavigate();
 console.log(state.userdetails.name)
 console.log(state.userdetails.email)
 console.log(state.userdetails.password)
  const[Signupcheck,setcheck]=useState({
    data:null,error:""
  });
  const[user,setuser]=useState({
    name:state.userdetails.name,email:state.userdetails.email,password:state.userdetails.password,Location:"",myFile:state.userdetails.myFile
  });
//   user.name=state.userdetails.name
//   user.email=state.userdetails.email
//   user.password=state.userdetails.password
//   user.Location="Lahore"
  console.log(user)
//   setuser({name:state.userdetails.name,email:state.userdetails.email,password:state.userdetails.password})
  const [readuser, readsetUser] = useState([]);
  const{name1 ,email1}=user;


 
  
  let name,value;
  const handleinputs=(e)=>{
    name=e.target.name
    value=e.target.value
    setuser({... user,[name]:value});
   
  } 
   const PostData= async (e)=>{
    e.preventDefault();
    
    let myFile=postImage.myFile
    user.myFile=postImage.myFile
    console.log(myFile)
    const{name,email,password}=user;
    let interest=state.userdetails.interest
    const res = await fetch("/update",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,password,interest,myFile
        })
        
     
        });
   const data= await res.json();

   console.log(data.status)
   if(res.status == 421 ){
console.log("plz fill it properly")
setcheck({error:"fill it properly"});
   }
  else if(res.status == 422 ){
    console.log("email already exists")
    setcheck({error:"email already exists"});
       }
   else{
 console.log("Registration succesfull")
 setcheck({data});

}
(navigate("/profile",{state:{userdetails:user}}))
   } 

   const convertToBase64 = (file) => {
 
     return new Promise((resolve, reject) => {
       const fileReader = new FileReader();
       fileReader.readAsDataURL(file);
       fileReader.onload = () => {
         resolve(fileReader.result);
       };
       fileReader.onerror = (error) => {
         reject(error);
       };
     });
   };
   const handleFileUpload = async (e) => {
     const file = e.target.files[0];
     const base64 = await convertToBase64(file);
    console.log(base64)
     setPostImage({ ...postImage, myFile : base64 })
   }
 
   const f2= async (e)=>{
   
   (navigate("/profile",{state:{userdetails:user }}))
 }
 const GoBack= async (e)=>{
   
  (navigate("/profile",{state:{userdetails:user }}))
}

    return (
      <>

    <div>
      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" style={{marginTop:'15%',marginLeft:'5%'}} >
             
 

   
 <p class="h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{fontSize:'40px',fontStyle:'italic',marginLeft:'0%'}} >Update Profile</p>

 <label htmlFor="file-upload" className='custom-file-upload'>
          <img src={postImage.myFile|| state.userdetails.myFile} alt="" />
        </label>

        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />
   <div>
      {/* {isEditing ? (
           <input type="text" class="form-control" onBlur={handleBlur} defaultValue={text}></input>
   
      ) : (
        <p onClick={handleClick}>{state.userdetails.name}</p>
      )} */}
      <h3>Add an image</h3>
    </div>

          
          <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <MDBInput wrapperClass='mb-4'defaultValue={user.name} name="name" label='Full Name' id='form4' type='text' onChange={handleinputs} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"style={{marginTop:"0%"}}></i>
                    <div class="form-outline flex-fill mb-0">
                    
                      <MDBInput wrapperClass='mb-4'  value={user.email} name="email" label='Email' id='form4' type='email' onChange={handleinputs} />
                    
                       
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
             
                      <MDBInput wrapperClass='mb-4'  value={user.password} name="password" label='Password' id='form4' type='password' onChange={handleinputs} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      
                   <MDBInput wrapperClass='mb-4' name="name" label='Repeat password' id='form4' type='password' />
                    </div>
                  </div>

          
                  </div>
                  {/* <b style={{margin:"15px",fontSize:"20px"}}>Select your Location</b>
      
      <Select
        name="Location"
        value={user.Location}
        onChange={handleinputs}
        options={options}
      />
       */}
                  <div class="d-flex  mx-4 mb-3 mb-lg-4">
                    <button type="button"  class="btn btn-primary btn-lg" onClick={PostData}>Save data</button>
                  </div>
                  <div class="d-flex  mx-4 mb-3 mb-lg-4">
                    <button type="button"  class="btn btn-primary btn-lg" onClick={GoBack}>Go back</button>
                  </div>
                  
           

              </div>
   

       </>
    );
  }


export default EditProfile;