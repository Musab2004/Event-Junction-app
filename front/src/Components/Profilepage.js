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

import avatar from '../download.png'
import './profilepage.css';


let image1=null
const url = "http://localhost:8080/uploads"
const Profilepage =()=> {
  const [postImage, setPostImage] = useState( { myFile : ""})
  const [getImage, setgetImage] = useState( { myFile : ""})
  const createPost = async (newImage) => {
    // console.log(newImage)
    let a="1"
    let myFile=newImage.myFile
    try{
      const res = await fetch("/uploads",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          myFile,
          a
        })
        
     
        });
         const data= await res.json();
        //  const buffer = Buffer.from(base64, "base64");
        //  fs.writeFileSync("new-path.jpg", buffer);
        setgetImage({myFile:data.myFile})
         image1=data.myFile
        console.log(data.myFile)
        // console.log(postImage.myFile)
      // await axios.post(url, newImage)
    }catch(error){
      console.log(error)
    }
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage)
    console.log("Uploaded")
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
   
    setPostImage({ ...postImage, myFile : base64 })
  }

  return (
    
      
  <>
       <h1 style={{margin:"20px"}}>Complete your Profile</h1>
    <div className="App" style={{marginRight:"1200px"}}>
        {image1!=null && <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" style={{ width: '300px', height: 300 }} src={image1}></img>
       </div> }
      <form onSubmit={handleSubmit}>

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
         <span>Designer</span>

         {/* <button type='submit'>Submit</button>  */}
      </form>
     
      {/* <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" style={{ width: '100%', height: 300 }} src={data.myFile} />
          </div> */}
    </div>
    </>
  )
}


export default Profilepage;