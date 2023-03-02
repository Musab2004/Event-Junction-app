import React from 'react';
import {useEffect,useState} from "react";
import Row from 'react-bootstrap/Row';

import Product  from './Product';
import logo from '../logo.svg';
// import styles from './Shop.module.scss';
let  data1 = [
  {
    id: 1,
    title: "event 1",
    content: "example content",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
  },
  {
    id: 2,
    title: "event 2",
    content: "example content",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
  },
  {
    id: 3,
    title: " event 3",
    content: "example content",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
  },
  ]
  

const Shop = () => {
  const[data,setdata]=useState({
    data:null
  });

   useEffect(() => {
  
    const getdata= async (e)=>{
    const res =  await fetch("/getevents",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        
      })
      
   
      });

     const data1=  await res.json();
     setdata({data:data1})
    
      
   }

     getdata()
   });

  return (
      <>
    
      <div className='row-wrapper'>
      
        <Row>
            {/* {getdata()} */}
           {data.data!=null&& data.data.map(product => (
            <Product key={product.id} product={product} />
          ))}
            
        </Row>
      </div>
      </>
    ) 
  
};

export default Shop;