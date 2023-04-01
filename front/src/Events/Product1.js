import React from 'react';
import { Button,Card } from 'react-bootstrap'
// import { Card } from '@material-ui/core';
import Col from 'react-bootstrap/Col';
import img4 from'../Components/pic1.jpg'
import {useNavigate} from "react-router-dom"

const Product1 = (props) => {
  let product=props.product
  
  // console.log(data)
  let navigate = useNavigate();
  // console.log(email) 
//   const routeChange = () =>{ 
//     let path = '/eventdetails'; 
   
//     // console.log(product.id)
//     // navigate(path,{state:{id:product.id, name:product.name , description:product.description,image:product.myFile,username:props.data}});
//       navigate(path,{state:{eventdetails:product,userdetails:props.userdetails}});
//   }

return(
<>
  <Col xs={5} md={1} lg={3} key={product.id}>
    <Card style={{ width: '15rem',marginTop:'50px' }}>
      <Card.Header></Card.Header>
      <Card.Img variant="top" src={product.myFile} style={{width:"200px",height:"150px"}}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary" >Refund ticket</Button>
     
      </Card.Body>
    </Card>
  </Col>
  </>
)
}

export default Product1;