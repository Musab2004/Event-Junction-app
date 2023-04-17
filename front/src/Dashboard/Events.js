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



const ProductCard = (props) => {
  const[ticketdata,setticketdata]=useState({
    data:null
  });
  let product=props.product
  let result=null
  console.log(props.data)
  const navigate = useNavigate();
   console.log(product.ticketbought,product.ticket)
   let totalprofit=product.ticketbought*product.ticket
   console.log("totalprofit : ",totalprofit)


   const f2= async (e)=>{
    (navigate("/editevent",{state:{ eventdetails:product,data:props.data }}))
  }
  return (
   <div>
   
    <Container>
      <LeftContainer >
      <Col xs={5} md={1} lg={3} key={product.id}>
    <Card style={{ width: '110rem',marginTop:'50px',marginLeft:'30%',height:'20rem' }}   data-mdb-ripple-color="light">
      {/* <Card.Header></Card.Header> */}
      {/* <Card.Img variant="top" src={img4} style={{width:"200px",marginLeft:"70%",height:"150px"}}/> */}
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
      
      
        <Card.Text>
       <b style={{fontSize:"30px"}}> Total Profit Generated: {product.ticketbought*product.ticket}</b>
        </Card.Text>
        <Card.Text>
        {product.time}
        </Card.Text>
      
        <Card.Text>
        <b style={{fontSize:"30px"}}>Tickets Bought:  {product.ticketbought}</b>
        </Card.Text>
        <Button variant="primary" onClick={f2}>Edit event</Button>
        {/* <BarChart width={400} height={200} data={data}>
    <XAxis dataKey="month"  />
    <YAxis />
    <Bar dataKey="tickets" barSize={30} fill="#8884d8"
      />
  </BarChart> */}
     
      </Card.Body>
   
    </Card>
  </Col>
      </LeftContainer>
      <RightContainer>

      </RightContainer>
    </Container>
   
  </div>
  );
};

export default function Events(){

  const[data,setdata]=useState({
    data:null
  });
  const location1 = useLocation();
  const searchParams = new URLSearchParams(location1.search);
  const email = searchParams.get('email');
  const name1 = searchParams.get('name');
  const[user,setuser]=useState({
   name:"",email:""
  });
  console.log(name1,email)
  user.name=name1
  user.email=email
  // let { search } = useLocation();
  // console.log(search)
  // let email=""
  // for(let i=1;i<search.length;i++){
  //    email=email+search[i]
  // }
  // console.log(email)
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
       <Dashboard data={user}/>
     <h4 style={{marginLeft:'100px'}} >Manage events here</h4>
     <Row style={{marginLeft:'200px'}}>
          {/* {getdata()} */}
         {data.data!=null&& data.data.map(product => (
          <ProductCard key={product.id} product={product} data={user}  />
        ))}
          
      </Row>
     </>

    )
    }

