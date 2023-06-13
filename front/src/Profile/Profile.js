import { useState,useEffect,Component } from "react";
import {Navlink,useNavigate,useLocation} from "react-router-dom"

import Comments from '../comment_Forum/Comments'
import Navbar from '../Components/Navbar'
import avatar from '../download.png'
import Product  from '../Events/Product';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button,Card,col } from 'react-bootstrap'
import {  Modal, Form } from 'react-bootstrap';
const ProductCard = (props) => {
    let username=props.userdetails.name
    let eventid=props.product._id
    let product=props.product
    let eventcreator=props.product.username
    let email=props.userdetails.email
    let eventname=props.product.name
    let expirydate=props.product.expiresAt
    const[logincheck,setcheck]=useState({
      data:null,error:""
    });
  const postrefund= async (e)=>{
    e.preventDefault();
    const res = await fetch("/refundevent",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        username,email,eventid,eventcreator,eventname,expirydate
      })
      
   
      });
      const data= await res.json();
      setcheck({error:"incorrect credentials"});
      console.log(data)

  
  }
  let date1=props.product.date
  const dater = new Date(date1);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formattedDate = `${dater.getDate()} ${months[dater.getMonth()]}, ${dater.getFullYear()}`
let { data, error } = logincheck;
  return (
    <>
    {error &&  <div class="container fixed-top" style={{width:'100%' ,marginTop:'9%',marginLeft:'60%'}}> 
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Refund Request Send</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert"  aria-label="Close"></button>
    </div>
    </div> }
   <div>
    <Col xs={5} md={1} lg={3} key={product.id} style={{marginleft:'500px'}}>
    <Card style={{ width: '40rem',marginTop:'50px',height:'15rem' }}   data-mdb-ripple-color="light">
      {/* <Card.Header></Card.Header> */}
      {/* <Card.Img variant="top" src={img4} style={{width:"200px",marginLeft:"70%",height:"150px"}}/> */}
      <Card.Body>
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
      
  
        <Button variant="primary" onClick={postrefund} >Refund ticket</Button>
      </Card.Body>
    </Card>
  </Col>
  </div>
  </>
  );
};
export default function Profile(){
    const {state} = useLocation();
    console.log(state)
     const[data,setdata]=useState({
        data:null
      });
     let email=state.userdetails.email
     
     useEffect(() => {
  
        const getdata= async (e)=>{
        const res =  await fetch("/geteventsuser",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
          email
          })
          
       
          });
    
         const data1=  await res.json();
        //  console.log(data)
         setdata({data:data1})
        
          
       }
    
         getdata()
       });
       const navigate = useNavigate();
       const f1= async (e)=>{
        (navigate("/Editprofile",{state:{userdetails:state.userdetails }}))
      }
    return(

<>

<Navbar userdetails={ state.userdetails }/>

<section class="h-100 gradient-custom-2" style={{height:"100px",marginLeft:'-30%',marginTop:'5%',width:"1000px"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card" style={{width:'1000px',hieght:'100px'}}>
          <div class="rounded-top text-white d-flex flex-row" style={{background: "#000D" ,height:"300px",width:"1000px"}}>
            <div class="ms-4 mt-5 d-flex flex-column"style={{width: '300px',height:'600px'}}>
              <img src={state.userdetails.myFile}
                alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
              style={{width:'200px',height:'200px'}} />
             <button className='btn btn-primary'  
                onClick={f1} style={{marginLeft:"-680px",marginTop:'18%'}}>
                Edit profile
              </button>
              
            </div>
         
          </div>
          <div class="p-4 text-black" style={{background: "#f8f9fa"}}>
            {/* <div class="d-flex justify-content-end text-center py-1">
              <div>
                <p class="mb-1 h5">253</p>
                <p class="small text-muted mb-0">Photos</p>
              </div>
              <div class="px-3">
                <p class="mb-1 h5">1026</p>
                <p class="small text-muted mb-0">Followers</p>
              </div>
              <div>
                <p class="mb-1 h5">478</p>
                <p class="small text-muted mb-0">Following</p>
              </div>
            </div> */}
          </div>
          <div class="card-body p-4 text-black"style={{width:'1000px',marginTop:'5%'}}>
            <div class="mb-5">
              <p class="lead fw-normal mb-1">About</p>
              <div class="p-4" style={{background: "#f8f9fa"}}>
                <p class="font-italic mb-1">{state.userdetails.name}</p>
                <p class="font-italic mb-1">Lives in {state.userdetails.locations}</p>
                {/* <div><h>Interests :</h></div>
                <Row>
         {true && state.userdetails.interest.map(product => (
          <p class="font-italic mb-0">{product}</p>
        ))}
          
      </Row> */}
                
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="lead fw-normal mb-0">Events Tickets Bought</p>
              {/* <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p> */}
            </div>


        

         
       




      <div className='row-wrapper'>
      
      <Row>
          {/* {getdata()} */}
         {data.data!=null&& data.data.map(product => (
          <ProductCard key={product.id} product={product} userdetails={ state.userdetails }  />
        ))}
          
      </Row>
    </div>
    {/* <button type="button" class="btn btn-primary" " data-target="#exampleModalLong">
  
  </button> */}
  
  
  
          </div>
        </div>
      </div>
    </div> 
  </div>
</section>


</>
    )

    }
    