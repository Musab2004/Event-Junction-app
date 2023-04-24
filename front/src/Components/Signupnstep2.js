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
import img5 from'./google.png'
// import img4 from'./new2.jpeg'

import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css'
import Select from 'react-select';
import Profilepage from "./Profilepage";
import Navbar from"./Navbar" 
import img4 from'./new3.jpeg'
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
// import img6 from'./new1.jpeg'
import img6 from'./loginimage.jpg'
let image1=null
const imageList = [logo, img5, img5, img4, img5,img5 ,logo ,logo,logo,logo,logo,logo,logo,logo]
const options = [
  { value: "Education", label: "Education" },
  { value: "Technology", label: "Technology" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Finanace", label: "Finanace" }
];
const options1 = [
  { value: "Lahore", label: "Lahore" },
  { value: "Multan", label: "Multan" },
  { value: "Karachi", label: "Karachi" },
  { value: "Islamabad", label: "Islamabad" }
];
const src='https://images.unsplash.com/photo-1444065381814-865dc9da92c0'
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
    <div style={{ flex: 1,marginLeft:'-1300px' }}>
      {children}
    </div>
  );
};
function Signupstep2(){
  const[locations,setlocation]=useState({
    
  });
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
       name,email,password,locations,interest,myFile
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
    const handleChange1  = async(e) => {

 

      setlocation(e.value)
      // interest.push("") 
       //  console.log(interest1)
      
        console.log(e)
        
      
       
      };
    return (
    
        <> 
{/* <Navbar/> */}
<Container>
      <LeftContainer >
   <div class="container1 h-100" style={{width:"1100px",height:"100px",marginLeft:"-10%",marginTop:"200px"}}>
    <div class="row d-flex  h-100">
      <div class="col-lg-15 col-xl-15">
   

            <div class="row justify-content-center">
            
     
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
     
              
        <div>
          <div>
          
        
   
        </div>
        <img
          src={img5}
          height="50"
          alt="MDB Logo"
          loading="lazy"
          style={{width:'20%',marginRight:'93%'}}
        /> 
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
  
       
   
      <b style={{margin:"15px",fontSize:"20px"}}>Select your Location</b>
      
      <Select
       
        // value={state1.selectedOptions}
        onChange={handleChange1}
        options={options1}
      />
      
      
      <b style={{margin:"10px",fontSize:"20px"}}>Select your interests</b>
      <Select
        isMulti
        // value={state1.selectedOptions}
        onChange={handleChange}
        options={options}
      />
    
         <div>
      <button class="btn btn-dark"type="button" style={{marginLeft:"540px",marginTop:"100px",width:"200px"}} onClick={PostData}>OK</button>
      </div>
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
  {/* <img src={img6} style={{width:"150%",marginLeft:'38.7%',marginTop:'15.3%',height:"148%"}}
                  class="img-fluid" alt="Sample image"></img> */}
  <img src={img6} style={{width:"165%",marginLeft:'38.7%',marginTop:'-11%',marginBottom:'-33.6%',height:"157.9%"}}
                  class="img-fluid" alt="Sample image"></img>
              </div>
        </div>
         {/* </div> */}
       
</div>
   </RightContainer>
    </Container>  
  
</>
    );
}


export default Signupstep2;