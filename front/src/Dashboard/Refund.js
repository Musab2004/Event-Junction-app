import { useState,Component } from "react";
import Dashboard from "./DashBoard";
import Product1  from '../Events/Product1';
import Row from 'react-bootstrap/Row';
import { Button,Card } from 'react-bootstrap'
import {useEffect} from "react";
import Col from 'react-bootstrap/Col';
import {Navlink,useNavigate,useParams,useLocation} from "react-router-dom"
import { BarChart, LineChart,Bar, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Container = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
       {children}
    </div>
  );
};

const LeftContainer = ({ children }) => {
  return (
    <div style={{ flex: 1 ,marginLeft:'0px'}}>
    {children}
      
    </div>
  );
};

const RightContainer = ({ children }) => {
  return (
    <div style={{ flex: 1,marginLeft:'0px' }}>
      {children}
    </div>
  );
};

 
const ProductCard = ({ product }) => {
  let username=product.username
  let eventid=product.eventid
  let email=product.email
  let eventcreator=product.eventcreator
  let eventname=product.eventname

  const Accepthandler= async (e)=>{
    e.preventDefault();
    const res = await fetch("/acceptrefund",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,email,eventid,eventcreator,eventname
      })
      
   
      });
      const data= await res.json();
      console.log(data)

  
  }
  const Rejecthandler= async (e)=>{
    e.preventDefault();
    const res = await fetch("/rejectrefund",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,eventid
      })
      
   
      });
      const data= await res.json();
      console.log(data)

  
  }
 
  return (
   <div>
   
    
      
      <Col xs={5} md={1} lg={3} key={product.id}>
    <Card style={{ width: '110rem',marginTop:'50px',marginLeft:'-20%',height:'10rem' }}   data-mdb-ripple-color="light">
      {/* <Card.Header></Card.Header> */}
      {/* <Card.Img variant="top" src={img4} style={{width:"200px",marginLeft:"70%",height:"150px"}}/> */}
      <Card.Body>
      <Container>
      <LeftContainer >
        <Card.Title>{product.name}</Card.Title>
      
      
        <Card.Text>
       <b style={{fontSize:"30px"}}>{product.eventname}</b>
        </Card.Text>
        <Card.Text>
        {product.time}
        </Card.Text>
      
        <Card.Text>
        <b style={{fontSize:"30px"}}>{product.username}</b>
        </Card.Text>
   

       </LeftContainer>
      <RightContainer>
        <div style={{marginLeft:'10%',marginTop:'3%'}}>
        <Button variant="success" onClick={Accepthandler} style={{width:'20%'}} >Accept</Button>
        <Button variant="danger" onClick={Rejecthandler} style={{width:'20%'}} >Reject</Button>
      {/* <BarChart width={500} height={300} data={data}>
    <XAxis dataKey="month"  />
    <YAxis />
    <Bar dataKey="tickets" barSize={30} fill="#8884d8"
      />
  </BarChart> */}
  </div>
      </RightContainer>
    </Container>
      </Card.Body>
   
    </Card>
  </Col>

    
   
  </div>
  );
};










export default function  Refund(){
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
    const res =  await fetch("/getrefund",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      email
      })
      
   
      });

     const data1=  await res.json();
     
     setdata({data:data1})
     console.log(data)
      
   }

     getdata()
   });


            return (
              <>
              <Dashboard data={user}/>
              <Row style={{marginLeft:'10%'}}>
          {/* {getdata()} */}
         {data.data!=null&& data.data.map(product => (
          <ProductCard key={product.id} product={product}  />
        ))}
          
      </Row>
             </>
            );
          }
         




