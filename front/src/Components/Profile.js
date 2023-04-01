import { useState,useEffect,Component } from "react";
import {Navlink,useNavigate,useLocation} from "react-router-dom"
import img4 from'../Components/pic1.jpg'
import Comments from '../comment_Forum/Comments'
import Navbar from '../Components/Navbar'
import avatar from '../download.png'
import Product  from '../Events/Product';
import Row from 'react-bootstrap/Row';
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
         console.log(data)
         setdata({data:data1})
        
          
       }
    
         getdata()
       });

    return(

<>
<Navbar userdetails={ state.userdetails }/>
<section class="h-100 gradient-custom-2" style={{height:"100px",width:"2000px"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card" style={{width:'2000px',hieght:'100px'}}>
          <div class="rounded-top text-white d-flex flex-row" style={{background: "#000" ,height:"300px",width:"2000px"}}>
            <div class="ms-4 mt-5 d-flex flex-column"style={{width: '300px',height:'600px'}}>
              <img src={state.userdetails.myFile}
                alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                style={{width: '500px',hieght:'300px',marginTop:'500px'}}/>
              <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style={{marginLeft:"-500px"}}>
                Edit profile
              </button>
            </div>
            <div class="ms-3" style={{marginTop: "100px",marginRight:'500px'}}>
              <h5>{state.userdetails.email}</h5>
              <p>{state.userdetails.name}</p>
            </div>
          </div>
          <div class="p-4 text-black" style={{background: "#f8f9fa"}}>
            <div class="d-flex justify-content-end text-center py-1">
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
            </div>
          </div>
          <div class="card-body p-4 text-black"style={{width:'2000px'}}>
            <div class="mb-5">
              <p class="lead fw-normal mb-1">About</p>
              <div class="p-4" style={{background: "#f8f9fa"}}>
                <p class="font-italic mb-1">Web Developer</p>
                <p class="font-italic mb-1">Lives in New York</p>
                <p class="font-italic mb-0">Photographer</p>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="lead fw-normal mb-0">Events Tickets Bought</p>
              <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
            </div>

      <div className='row-wrapper'>
      
      <Row>
          {/* {getdata()} */}
         {data.data!=null&& data.data.map(product => (
          <Product key={product.id} product={product} userdetails={ state.userdetails }  />
        ))}
          
      </Row>
    </div>
             {/* <div class="row g-1">
              <div class="col ">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="image 1" class="w-100 rounded-3"/>
              </div>
              <div class="col ">
                <img style={{width:'250px'}}src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" class="w-100 rounded-3"/>
              </div>
            </div>
            <div class="row g-1">
              <div class="col">
                <img style={{width:'250px'}} src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                  alt="image 1" class="w-100 rounded-3"/>
              </div>
              <div class="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                  alt="image 1" class="w-100 rounded-3"/>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div> 
  </div>
</section>


</>
    )

    }
    