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

import img4 from '../index.jpeg'
import img5 from '../index1.jpeg'
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css'
import Profilepage from "./Profilepage";
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

const imageList = [logo, img5, img5, img4, img5,img5 ,logo ,logo,logo,logo,logo,logo,logo,logo]

const src='https://images.unsplash.com/photo-1444065381814-865dc9da92c0'
const Signupstep2 =()=> {
  const navigate = useNavigate();
  const[Signupcheck,setcheck]=useState({
    data:null,error:""
  });
  const {state} = useLocation();
  // const { email, password } = state;
   console.log(state.email)
  

    const PostData= async (e)=>{
      e.preventDefault();
      var string1="";
      for(let i=0;i<img1.image.length;i++){
 if(img1.image[i].value==0){
  string1= string1.concat("/", "Education");
   
  // console.log(string1)
 }
 if(img1.image[i].value==1){
  string1= string1.concat("/", "IT technology");
  
  //console.log(string1)
}
if(img1.image[i].value==2){
 string1= string1.concat("/", "ONline");
  
  //console.log(string1)
}
if(img1.image[i].value==3){
  string1=string1.concat("/", "Offline");
  
  //console.log(string1)
}
      }
console.log(string1)
      const{name,email,password}=state;
     const res = await fetch("/register",{
     method:"POST",
     headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify({
       name,email,password,string1
     })
     
  
     });
     const data= await res.json();
     console.log(data)
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
     

      } 


   
   
    
   
      // this.onPick = this.onPick.bind(this);
      const [img1,setimg1]=useState({
        image:null
      })
    var onPick =(image)=>{
      setimg1({image})
      
    }
    onPick = onPick.bind(img1);
    let { data, error } = Signupcheck;
    return (
    
        <> 
        <div>
        <Profilepage/>
        </div>
          {data && (navigate("/Home",{state: {name:data.name, email:data.email , password: data.password }}))}
        <div>
        {error!="" &&<div class="row d-flex justify-content-center align-items-center h-100">
  <p  style={{color:'red'}}>{error}</p>
  </div> }
     
            
            
        </div>
        <h1 style={{margin:"50px"}}>Select your interests</h1>
        <div class="container h-100 w-5" style={{margin:"50px"}}>
        <ImagePicker 
          
           images={imageList.map((image, i) => ( {src:image, value:i ,alt:"hehe" }))}
         
           onPick={onPick}
          multiple
           
        />
        
       
      </div>
      <h1 style={{margin:"50px"}}>Select your Organization</h1>
      <MDBCol md='5'style={{margin:"100px",hieght:"500px"}}>
      <MDBInput wrapperClass='mb-4' name="name" label='Organization Affiliation' id='form4' type='text' />
      </MDBCol>
   
      <Button type="button" style={{margin:"250px",width:"500px"}} onClick={PostData}>OK</Button>
</>
    );
}


export default Signupstep2;