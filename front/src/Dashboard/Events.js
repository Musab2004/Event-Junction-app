import { useState,Component } from "react";
import Dashboard from "./DashBoard";
import avatar from '../download.png'
import img4 from '../index.jpeg'
import Col from 'react-bootstrap/Col';
import {useEffect} from "react";
import Row from 'react-bootstrap/Row';
import { Button,Card } from 'react-bootstrap'
import Product1  from '../Events/Product1';
import {Link,useNavigate,useLocation} from "react-router-dom"
export default function Events(){

  const[data,setdata]=useState({
    data:null
  });
  let { search } = useLocation();
  console.log(search)
  let email=""
  for(let i=1;i<search.length;i++){
     email=email+search[i]
  }
  console.log(email)
 useEffect(() => {

    const getdata= async (e)=>{
    const res =  await fetch("/getcreaterevents",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      email
      })
      
   
      });

     const data1=  await res.json();
     console.log(data)
     setdata({data:data1})
    
      
   }

     getdata()
   });
    return (
    
     <>
       <Dashboard email={email}/>
     <h4>Manage events here</h4>
     <Row>
          {/* {getdata()} */}
         {data.data!=null&& data.data.map(product => (
          <Product1 key={product.id} product={product}  />
        ))}
          
      </Row>
     </>

    )
    }

