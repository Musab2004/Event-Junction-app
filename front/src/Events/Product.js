import React from 'react';
import { Button,Card } from 'react-bootstrap'
// import { Card } from '@material-ui/core';
import Col from 'react-bootstrap/Col';
import img4 from'../Components/pic1.jpg'
import {useNavigate} from "react-router-dom"

const Product = ({product}) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/eventdetails'; 
    console.log(path)
    navigate(path,{state:{id:product.id, name:product.name , description:product.description }});
  }

return(
<>
  <Col xs={5} md={1} lg={3} key={product.id}>
    <Card style={{ width: '15rem',marginTop:'50px' }}>
      <Card.Header></Card.Header>
      <Card.Img variant="top" src={img4}style={{width:"200px"}}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary" onClick={routeChange}>view event</Button>
     
      </Card.Body>
    </Card>
  </Col>
  </>
)
}

export default Product;