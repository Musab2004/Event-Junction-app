import React from 'react';
import { Button,Card,col } from 'react-bootstrap'
import img4 from'./pic1.jpg'
import Col from 'react-bootstrap/Col';
import Navbar from './Navbar'
import {useEffect,useState} from "react";
import './FindEvent.css'
import {Link,useNavigate,useLocation} from "react-router-dom"
const products = [
  { id: 1, name: 'Product 1', location: 'USA', language: 'English' },
  { id: 2, name: 'Product 2', location: 'Canada', language: 'French' },
  { id: 3, name: 'Product 3', location: 'Mexico', language: 'Spanish' },
  { id: 4, name: 'Product 4', location: 'USA', language: 'Spanish' },
  { id: 5, name: 'Product 5', location: 'Canada', language: 'English' },
  { id: 6, name: 'Product 6', location: 'Mexico', language: 'French' }
];


const Container = ({ children }) => {
  return (
    <div style={{ display: 'flex' ,marginTop:'6%'}}>
       {children}
    </div>
  );
};

const LeftContainer = ({ children }) => {
  return (
    <div style={{ flex: 1 ,marginLeft:'-5%'}}>
    {children}
      
    </div>
  );
};

const RightContainer = ({ children }) => {
  return (
    <div style={{ flex: 1,marginLeft:'-60%' }}>
      {children}
    </div>
  );
};


   
const Container1 = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
       {children}
    </div>
  );
};

const LeftContainer1 = ({ children }) => {
  return (
    <div style={{ flex: 1 ,marginLeft:'0%'}}>
    {children}
      
    </div>
  );
};

const RightContainer1 = ({ children }) => {
  return (
    <div style={{ flex: 1,marginLeft:'0px' }}>
      {children}
    </div>
  );
};


const ProductCard = (props) => {
  let navigate = useNavigate();
  const routeChange = () =>{ 
    let path = '/eventdetails'; 
   
    // console.log(product.id)
    // navigate(path,{state:{id:product.id, name:product.name , description:product.description,image:product.myFile,username:props.data}});
      navigate(path,{state:{eventdetails:product,userdetails:props.userdetails}});
  }
  let product=props.product
  let date1=props.product.date
  const dater = new Date(date1);
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formattedDate = `${dater.getDate()} ${months[dater.getMonth()]}, ${dater.getFullYear()}`;

console.log(formattedDate);
  return (
  
    <Col xs={5} md={1} lg={3} key={product.id}>
    <Card style={{ width: '60rem',marginTop:'50px',height:'15rem',marginTop:'50px' }}   data-mdb-ripple-color="light">
      <Container1>
      <LeftContainer1 >
     
      <Card.Body>
      
      
        <Card.Title onClick={routeChange}><b style={{fontSize:'20px',fontFamily:'bolder'}}>{product.name}</b></Card.Title>
        <div>
        <h>
        {product.Orgname}
        </h>
        </div>
        
        <div style={{color:'red'}}>
        <h>
        {formattedDate}
        </h>
        </div>
        <div>
        <h>
        {product.field}
        </h>
        </div>
        {/* <Card.Text>
        {product.time}
        </Card.Text> */}

     
    
 </Card.Body>
      </LeftContainer1>
      <RightContainer1>
        <div style={{marginLeft:'25%',marginTop:'6%'}}>
        <Card.Img variant="top" src={product.myFile} style={{width:"200px",height:"150px"}}/>
  </div>
      </RightContainer1>
    </Container1>
     
    </Card>
  </Col>
  );
};

const SearchPage = () => {
  window.addEventListener('popstate', function (event)

{

  window.history.replaceState(null, null, '/Login');

});
    const {state} = useLocation();
    const[eventdata,seteventdata]=useState({
        data:null
      });
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [priceFilter, setpriceFilter] = useState();
  const [expiryFilter, setExpiryFilter] = useState('');
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleLanguageFilterChange = (event) => {
    setLanguageFilter(event.target.value);
  };
  const handleExpiryFilter = (event) => {
    setExpiryFilter(event.target.value);
  };
  const handlepriceFilterChange = (event) => {
   
      console.log(event.target.value)
      setpriceFilter(event.target.value);
   
    
  };
  let filteredProducts =null
if(eventdata.data!=null){
   filteredProducts = eventdata.data.filter((product) => {
    const nameMatches = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatches = locationFilter ? product.location === locationFilter : true;
    const languageMatches = languageFilter ? product.field === languageFilter : true;
    const priceMatches = priceFilter=='Free' ? product.ticket === 0: expiryFilter === 'Not Free'
    ? product.ticket>0:true;
    const today = new Date();
    const thisWeek = new Date();
    thisWeek.setDate(thisWeek.getDate() + 7);
    const thisMonth = new Date();
    thisMonth.setMonth(thisMonth.getMonth() + 1);
    const expiryDate = new Date(product.date);
    
    const matchesExpiryFilter =
      expiryFilter === 'today'
        ? expiryDate .toDateString() === today.toDateString()
        : expiryFilter === 'this-week'
        ? expiryDate >= today && expiryDate <= thisWeek
        : expiryFilter === 'this-month'
        ? expiryDate  >= today && expiryDate <= thisMonth
        : true;
    return nameMatches && locationMatches && languageMatches && matchesExpiryFilter && priceMatches;
  });
}
else{
    const filteredProducts =null
}
  useEffect(() => {
  
    const geteventdata= async (e)=>{
    const res =  await fetch("/getevents",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        
      })
      
   
      });
  
     const data2=  await res.json();
     seteventdata({data:data2})
    //  setdata({data:data1})
     
    
      
   }
   geteventdata()
   
   });
  //  let { data, error } = logincheck;
  return (
      <>

<Navbar userdetails={ state.userdetails }/>
<Container>
      <LeftContainer >
       
       <div>  <div>
            <b style={{fontSize:'30px'}}>Filters</b>
        </div>
        <div>
            <b style={{fontSize:'20px',marginTop:'3%'}}>Location</b>
        </div>
        <select class="form-select" value={locationFilter} onChange={handleLocationFilterChange} style={{width:'20%',marginTop:'1%'}}aria-label="Default select example">
        <option value="">All Locations</option>
          <option value="Multan">Multan</option>
          <option value="Lahore">Lahore</option>
          <option value="Karachi">Karachi</option>
</select>
<div style={{marginTop:'3%'}} >
            <b style={{fontSize:'20px'}}>Catagories</b>
        </div>
<select class="form-select" value={languageFilter} onChange={handleLanguageFilterChange} style={{width:'20%',marginTop:'1%'}}aria-label="Default select example">

  <option value="">All Languages</option>
          <option value="Finanace">Finance</option>
          <option value="Education">Education</option>
          <option value="Technology">Technology</option>
</select>
<div style={{marginTop:'3%'}}>
            <b style={{fontSize:'20px'}}>Date</b>
        </div>
<select class="form-select" style={{width:'20%',marginTop:'1%'}} aria-label="Default select example"
value={expiryFilter} onChange={handleExpiryFilter}>
            <option value="">All</option>
            <option value="today">Today</option>
            <option value="this-week">This week</option>
            <option value="this-month">This month</option>
</select>
<div style={{marginTop:'3%'}} >
            <b style={{fontSize:'20px'}}>Price</b>
        </div>
<select class="form-select" value={priceFilter} onChange={handlepriceFilterChange} style={{width:'20%',marginTop:'1%'}}aria-label="Default select example">
  <option selected>Price</option>
  <option value="Free">Free</option>
  <option value="Not Free">Not Free</option>
  
</select> 
</div>    
      
     
     
      </LeftContainer>
      <RightContainer>
      { eventdata.data!=null && <div>
      <div class="input-group"style={{width:'50%'}}>
  <input type="search"  value={searchQuery}
          onChange={handleSearchChange}  class="form-control rounded" placeholder="Search Anything" aria-label="Search" aria-describedby="search-addon" />
  <button type="button"style={{marginTop:'-0.1%',width:'10%'}} class="btn btn-outline-primary">search</button>
</div>
    <div className="search-page">
      <div className="filters">
 
     
      </div>
      {eventdata.data &&<div className="product-list" >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} userdetails={ state.userdetails } />
        ))}
      </div>
   
    }
     </div>
     </div> 
     }
     {eventdata.data==null && <h style={{fontSize:'40px',marginLeft:'250px'}}>Loading....</h>}
      </RightContainer>
    </Container>


  





 




    </>
  );
};

export default SearchPage;