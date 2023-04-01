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
  

const Shop = (props) => {

  let email=props.userdetails.email

  let data=props.eventdata



  return (
      <>
    
      <div className='row-wrapper'>
      
        <Row>
            {/* {getdata()} */}
           {data!=null&& data.map(product => (
            <Product key={product.id} product={product} userdetails={ props.userdetails }  />
          ))}
            
        </Row>
      </div>
      </>
    ) 
  
};

export default Shop;