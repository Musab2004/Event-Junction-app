import { useState,Component } from "react";
import Dashboard from "./DashBoard";
import Product1  from '../Events/Product1';
import Row from 'react-bootstrap/Row';
import { Button,Card } from 'react-bootstrap'
import {useEffect} from "react";
import Col from 'react-bootstrap/Col';
import {Navlink,useNavigate,useParams,useLocation} from "react-router-dom"
import { BarChart, LineChart,Bar, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{month: 'January', tickets: 400},{month: 'Febuary', tickets: 200},{month: 'March', tickets: 100}];
let r=[{data:'23-9-2010',count:23}]
// r=r.json()
// let a={data:'23-9-2010',count:23}
// let arr=[]
// arr.push(a)
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
const ProductCard = ({ product }) => {
  const[logincheck,setcheck]=useState({
    data:null,error:"1"
  });
let arr=[]
console.log(arr)
  const[ticketdata,setticketdata]=useState({
    data:null
  });
  let result=null
  let result1=null
  var a={}
  useEffect(() => {
    let id=product.id
    const getticketdata= async (e)=>{
    const res =  await fetch("/gettickets",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      id
      })
      
   
      });
      console.log("r : ",r)
     const data3=  await res.json();
     console.log(data3)
    // console.log(data3)
     setticketdata({data:data3})
    
      result = data3.reduce((acc, curr) => {       
      const date = curr.time;
      if (!acc[0]) {
        acc[0]={ count: 1, data: date };
      } else {
        acc[0].count++;
      }
      // acc[date].data.push(curr);
      return acc;
    },{});
    console.log(result)
    a['count']=result[0].count
    a['data']=result[0].data
    arr.push(a)
  
   result1=result[0]
   console.log("array : ",arr)
   setcheck({error:"incorrect credentials"});
   
    // for (const file of result) {
     
    //   console.log(file);
    // }
    // console.log(result);  
   }

     getticketdata()
     
    //  console.log(result);
   });
   console.log(product.ticketbought,product.ticket)
   let totalprofit=product.ticketbought*product.ticket
   console.log("totalprofit : ",totalprofit)

  let {  error } = logincheck;
  return (
   <div>
   
    <Container>
      <LeftContainer >
      <Col xs={5} md={1} lg={3} key={product.id}>
    <Card style={{ width: '110rem',marginTop:'50px',marginLeft:'30%',height:'30rem' }}   data-mdb-ripple-color="light">
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
       {error!=""  && <BarChart width={400} height={200} data={arr}>
    <XAxis dataKey="data"  />
    <YAxis />
    <Bar dataKey="count" barSize={30} fill="#8884d8"
      />
  </BarChart>}
   
      </Card.Body>
   
    </Card>
  </Col>
      </LeftContainer>
      <RightContainer>
        <div style={{marginLeft:'20%',marginTop:'8%'}}>
      <BarChart width={500} height={300} data={data}>
    <XAxis dataKey="month"  />
    <YAxis />
    <Bar dataKey="tickets" barSize={30} fill="#8884d8"
      />
  </BarChart>
  </div>
      </RightContainer>
    </Container>
   
  </div>
  );
};
export default function EventReports(){
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
   
     <h4 style={{marginLeft:'10%'}}>Event reports are here</h4>
     
  
  <Row style={{marginLeft:'10%'}}>
          {/* {getdata()} */}
         {data.data!=null&& data.data.map(product => (
          <ProductCard key={product.id} product={product}  />
        ))}
          
      </Row>

  {/* <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="month"  />
    <YAxis />
    <Bar dataKey="tickets" barSize={30} fill="#8884d8"
      />
  </BarChart>
  <LineChart width={100} height={300} data={data}>
    <Line type="monotone" dataKey="tickets" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="month" />
    <YAxis />
  </LineChart> */}
     </>

    )
    }

