import React from 'react';
import { Button,Card,col } from 'react-bootstrap'
import img4 from'./pic1.jpg'
import Col from 'react-bootstrap/Col';
import Navbar from './Navbar'
import {useEffect,useState} from "react";
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
  return (
    // <div className="card" style={{marginTop:'3%'}}>
    //   <h2>{product.name}</h2>
    //   <p>Location: {product.location}</p>
    //   <p>Language: {product.language}</p>
    // </div>
    <Col xs={5} md={1} lg={3} key={product.id}>
    <Card style={{ width: '60rem',marginTop:'50px',height:'15rem' }}   data-mdb-ripple-color="light">
      {/* <Card.Header></Card.Header> */}
      {/* <Card.Img variant="top" src={img4} style={{width:"200px",marginLeft:"70%",height:"150px"}}/> */}
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.location}
        </Card.Text>
        <Card.Text>
        {product.field}
        </Card.Text>
        <Card.Text>
        {product.name}
        </Card.Text>
        
     
      </Card.Body>
    </Card>
  </Col>
  );
};

const SearchPage = () => {
    const {state} = useLocation();
    const[eventdata,seteventdata]=useState({
        data:null
      });
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleLanguageFilterChange = (event) => {
    setLanguageFilter(event.target.value);
  };
  let filteredProducts =null
if(eventdata.data!=null){
   filteredProducts = eventdata.data.filter((product) => {
    const nameMatches = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatches = locationFilter ? product.location === locationFilter : true;
    const languageMatches = languageFilter ? product.field === languageFilter : true;
    return nameMatches && locationMatches && languageMatches;
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
  return (
      <>

<Navbar userdetails={ state.userdetails }/>
<Container>
      <LeftContainer >
       
        <div>
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
<select class="form-select" style={{width:'20%',marginTop:'1%'}} aria-label="Default select example">
  <option selected>Date</option>
  <option value="1">Today</option>
  <option value="2">this week</option>
  <option value="3">this month</option>
</select>
<div style={{marginTop:'3%'}} >
            <b style={{fontSize:'20px'}}>Price</b>
        </div>
<select class="form-select" style={{width:'20%',marginTop:'1%'}}aria-label="Default select example">
  <option selected>Price</option>
  <option value="1">Free</option>
  <option value="2">Not Free</option>
  
</select>
       
    
     
     
      </LeftContainer>
      <RightContainer>
      <div class="input-group"style={{width:'50%'}}>
  <input type="search"  value={searchQuery}
          onChange={handleSearchChange}  class="form-control rounded" placeholder="Search Anything" aria-label="Search" aria-describedby="search-addon" />
  <button type="button"style={{marginTop:'-0.1%',width:'10%'}} class="btn btn-outline-primary">search</button>
</div>
    <div className="search-page">
      <div className="filters">
 
        {/* <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products..."
        />
        <select value={locationFilter} onChange={handleLocationFilterChange}>
          <option value="">All Locations</option>
          <option value="Multan">Multan</option>
          <option value="Lahore">Lahore</option>
          <option value="Karachi">Karachi</option>
        </select>
        <select value={languageFilter} onChange={handleLanguageFilterChange}>
          <option value="">All Languages</option>
          <option value="Finanace">Finance</option>
          <option value="Lahore">Lahore</option>
          <option value="Karachi">Karachi</option>
        </select> */}
      </div>
      {eventdata.data &&<div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
   
    }
     </div>
        {/* Content for right container */}
      </RightContainer>
    </Container>


  





 




    </>
  );
};

export default SearchPage;