import { useState,Component } from "react";
import Dashboard from "./DashBoard";
import avatar from '../download.png'

import Col from 'react-bootstrap/Col';
import {useEffect} from "react";
import Row from 'react-bootstrap/Row';
import { Button,Card } from 'react-bootstrap'
import Product1  from '../Events/Product1';
import {Link,useNavigate,useLocation} from "react-router-dom"
import Loader from '../Components/Loader';
const Container = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
       {children}
    </div>
  );
};

const LeftContainer = ({ children }) => {
  return (
    <div style={{ flex: 1 ,marginLeft:'-300px',width:'100%'}}>
    {children}
      
    </div>
  );
};

const RightContainer = ({ children }) => {
  return (
    <div style={{ flex: 1,marginLeft:'100px',width:'150%' }}>
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
    (navigate("/editevent",{state:{ eventdetails:product,userdetails:props.userdetails }}))
  }
  const id=props.product._id
  const deleteevent= async (e)=>{
      const res =  await fetch("/deleteevents",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
        id
        })
        
     
        });
  
      
      
        
     }
  


  
  const viewevent= async (e)=>{
    let path = '/eventdetails'; 
   
    // console.log(product.id)
    // navigate(path,{state:{id:product.id, name:product.name , description:product.description,image:product.myFile,username:props.data}});
      navigate(path,{state:{eventdetails:product,userdetails:props.userdetails}});
  }
  let date1=props.product.date
  const dater = new Date(date1);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formattedDate = `${dater.getDate()} ${months[dater.getMonth()]}, ${dater.getFullYear()}`
  return (
   <div>
   
   
      <Col xs={5} md={1} lg={3} key={product.id}>
    <Card style={{ width: '50rem',marginTop:'50px',marginLeft:'-50%',height:'15rem' }}   data-mdb-ripple-color="light">
      {/* <Card.Header></Card.Header> */}
      {/* <Card.Img variant="top" src={img4} style={{width:"200px",marginLeft:"70%",height:"150px"}}/> */}
      <Card.Body style={{marginLeft:'45%'}}>
      <Container>
      <LeftContainer >
      <b style={{fontSize:"20px",fontFamily:'bolder'}} >{product.name}</b>
      <Card.Text>
       {product.Orgname}
        </Card.Text>
       
        <Card.Text>
        <i class="fas fa-calendar fa-lg me-3 fa-fw" style={{ fontSize: '18px' }}></i>
       <b style={{fontSize:"15px",fontFamily:'bolder'}}>{formattedDate}</b>
        </Card.Text>
        {/* <Card.Text>
        {product.time}
        </Card.Text> */}
      
        <Card.Text>
        <i class="fas fa-map-marker-alt" style={{ fontSize:'18px'}}></i>

        <b style={{fontSize:"15px",marginLeft:'15px',fontFamily:'bolder'}}>  {product.location}</b>
        </Card.Text>
      
        {/* <BarChart width={400} height={200} data={data}>
    <XAxis dataKey="month"  />
    <YAxis />
    <Bar dataKey="tickets" barSize={30} fill="#8884d8"
      />
  </BarChart> */}
     </LeftContainer>
      <RightContainer>
      <div style={{marginLeft:'20%'}}>
        <div>
        <Button variant="success"  style={{width:'60%',marginTop:'10%'}} onClick={f2}>Edit event</Button>
        </div>
        <div>
        <Button variant="danger" style={{width:'60%',marginTop:'10%'}}  onClick={deleteevent}>Delete event</Button>
        </div>
        <div>
        <Button variant="primary" style={{width:'60%',marginTop:'10%'}}  onClick={viewevent}>view event</Button>
        </div>
        </div>
      </RightContainer>
    </Container>
      </Card.Body>
   
    </Card>
  </Col>
      
   
  </div>
  );
};

export default function Events(){
 
  const[data,setdata]=useState({
    data:null
  });
  let { state} = useLocation();
  let email=state.userdetails.email

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
       <Dashboard userdetails={state.userdetails}/>
     <h4 style={{marginLeft:'100px',fontFamily:'bolder',marginTop:'100px'}} >Manage events here</h4>
     {/* {data.data==null && <div><h>No event Crearted yet</h></div>} */}
  {data.data!=null && <div>   <Row style={{marginLeft:'200px'}}>
          {/* {getdata()} */}
         {data.data!=null&& data.data.map(product => (
          <ProductCard key={product.id} product={product} userdetails={state.userdetails}  />
        ))}
          
      </Row>
      </div>
}
      {data.data==null &&<div style={{marginTop:'170px',marginLeft:'500px'}}> <Loader/> </div>}
     </>

    )
    }

