import React from 'react';
import { Button,Card } from 'react-bootstrap'
// import { Card } from '@material-ui/core';
import Col from 'react-bootstrap/Col';

import {useNavigate} from "react-router-dom"

const Product = (props) => {
  let product=props.product
  
  // console.log(data)
  let navigate = useNavigate();
  // console.log(email) 
  const routeChange = () =>{ 
    let path = '/eventdetails'; 
   
    // console.log(product.id)
    // navigate(path,{state:{id:product.id, name:product.name , description:product.description,image:product.myFile,username:props.data}});
      navigate(path,{state:{eventdetails:product,userdetails:props.userdetails}});
  }
  let date1=props.product.date
  const dater = new Date(date1);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formattedDate = `${dater.getDate()} ${months[dater.getMonth()]}, ${dater.getFullYear()}`
// let date=product.date.toDateString()
return(
<>
  <Col xs={5} md={1} lg={3} key={product.id}>
    <Card style={{ width: '17rem',marginTop:'50px' ,marginLeft:'1rem' }}>
 
      <Card.Img variant="top" src={product.myFile} style={{width:"17rem",height:"150px",border: "1px solid black"}}/>
      <Card.Body>
        <b style={{fontSize:'16px'}}>{product.name}</b>
        <Card.Text style={{color:'blue'}}>
          {product.Orgname}
        </Card.Text>
        <Card.Text style={{color:'red'}}>
          {formattedDate}
        </Card.Text>
        <Button variant="primary" onClick={routeChange}>view event</Button>
        <div>
      {/* <LikeButton /> */}
      {/* <i class="fa fa-heart" style="font-size:24px"></i> */}
    </div>
      </Card.Body>
    </Card>
  </Col>
  </>
)
}

export default Product;