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
import Select from 'react-select';
import Profilepage from "./Profilepage";
import Navbar from"./Navbar" 
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
import avatar from '../download.png'
import './profilepage.css';


let image1=null
const imageList = [logo, img5, img5, img4, img5,img5 ,logo ,logo,logo,logo,logo,logo,logo,logo]
const options = [
  { value: "Education", label: "Education" },
  { value: "Technology", label: "Technology" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Finanace", label: "Finanace" }
];
const src='https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

function Signupstep2(){
  const navigate = useNavigate();
  const [postImage, setPostImage] = useState( { myFile : ""})
  const [getImage, setgetImage] = useState( { myFile : ""})
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
   
    setPostImage({ ...postImage, myFile : base64 })
  }

  const[Signupcheck,setcheck]=useState({
    data:null,error:""
  });
  const[Interest,setinterests]=useState({
    
  });
  const[state1,setState]=useState({
    selectedOptions:""
  });
  const {state} = useLocation();
  // const { email, password } = state;
   console.log(state.email)
  

    const PostData= async (e)=>{
      e.preventDefault();
      
  
      let myFile=postImage.myFile
      // const{interest}=Interest;
      // console.log(interest)
      const{name,email,password}=state;
      const interest=Interest
     
     const res = await fetch("/register",{
     method:"POST",
     headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify({
       name,email,password,interest,myFile
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
    var string12=""
    let { data, error } = Signupcheck;
    let name ,value;
    const handleChange  = async(e) => {
     //name=e.value
    let string2=""
    
    let interest1=[]
    for (let i=0;i<e.length;i++){ 
     console.log(e[i].value)
     interest1.push(e[i].value)
    
    }
    setinterests(interest1)
    // interest.push("") 
      console.log(interest1)
    
      console.log("initerest :",Interest)
      
    
     
    };
    return (
    
        <> 
{/* <Navbar/> */}
   <div class="container1 h-100" style={{width:"1100px",height:"100px",marginLeft:"300px",marginTop:"200px"}}>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-15 col-xl-15">
   
      <div class="card text-black" >
           
           <div class="card-body p-md-9">
            <div class="row justify-content-center">
            
     
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
     
              
        <div>
          <div>
          
        
   
        </div>
       
        {/* <Profilepage/> */}
        <b style={{margin:"20px",fontSize:"30px"}}>Complete your Profile</b>
    <div className="App" style={{marginLeft:"30px"}}>
        {image1!=null && <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" style={{ width: '300px', height: 300 }} src={image1}></img>
       </div> }
      <form>

        <label htmlFor="file-upload" className='custom-file-upload'>
          <img src={postImage.myFile|| avatar} alt="" />
        </label>

        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />

          <h3>Add an image</h3>
    

         {/* <button type='submit'>Submit</button>  */}
      </form>
     
      {/* <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" style={{ width: '100%', height: 300 }} src={data.myFile} />
          </div> */}
    </div>
        </div>
      
    
          {data && (navigate("/Home",{state: {userdetails:data}}))}
        <div>
        {error!="" &&<div class="row d-flex justify-content-center align-items-center h-100">
  <p  style={{color:'red'}}>{error}</p>
  </div> }
     
            
            
        </div>
   
        
     
        
        {/* <ImagePicker 
          
           images={imageList.map((image, i) => ( {src:image, value:i ,alt:"hehe" }))}
         
           onPick={onPick}
          multiple
           
        /> */}
  
       
   
      <b style={{margin:"15px",fontSize:"20px"}}>Select your Organization</b>
      
      <MDBInput wrapperClass='mb-4' name="name" label='Organization Affiliation' id='form4' type='text' />
      
      
      <b style={{margin:"10px",fontSize:"20px"}}>Select your interests</b>
      <Select
        isMulti
        // value={state1.selectedOptions}
        onChange={handleChange}
        options={options}
      />
    
         <div>
      <Button type="button" style={{marginLeft:"540px",marginTop:"100px",width:"200px"}} onClick={PostData}>OK</Button>
      </div>
       </div>
    
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      {/* <div class="container1 h-100" style={{width:"5000px",hieght:"500px",marginLeft:"-300px",marginTop:"0px",color:"black"}}>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-15 col-xl-15">
   
      <div class="card text-black" >
           
           <div class="card-body p-md-9">
            <div class="row justify-content-center">
            
     
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div> */}
</>
    );
}


export default Signupstep2;