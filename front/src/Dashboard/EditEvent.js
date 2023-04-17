import React,{useState} from 'react'; 
import Form from "react-bootstrap/Form";
import {Link,Navlink,useNavigate,useParams,useLocation} from "react-router-dom"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBFooter
}
from 'mdb-react-ui-kit';
import avatar from '../download.png'
import img4 from '../index.jpeg'
import Dashboard from './DashBoard';
import Select from 'react-select';
import './createevent.css'




const options = [
  { value: "Lahore", label: "Lahore" },
  { value: "Multan", label: "Multan" },
  { value: "Karachi", label: "Karachi" },
  { value: "Islamabad", label: "Islamabad" }
];
const options1 = [
  { value: "Education", label: "Education" },
  { value: "Technology", label: "Technology" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Finanace", label: "Finanace" }
];
function EditEvent() {
  const {state} = useLocation();
  console.log(state)
  const[locations,setlocation]=useState({
    
  });
  const[Field,setfield]=useState({
    
  });
  const[ticket,setticket]=useState({
    
  });
  const[date,setdate]=useState({
    
  });
  const[user,setuser]=useState({
    name:"",email:""
   });
   const[logincheck,setcheck]=useState({
    data:null,error:""
  });
   user.name=state.data.name
   user.email=state.data.email
   console.log(user)
  const {field}=Field
  const {location}=locations
  // const{query} = useParams();

  let image1=null
  // const {state} = useLocation();
  const [postImage, setPostImage] = useState( { myFile : ""})
  const [getImage, setgetImage] = useState( { myFile : ""})
  let [error1, seterror1] = useState(false)
    const[event,setevent]=useState({
        name:"",description:"",ticket:0,date:"",time:"",ticket:0,date:"",time:"",numtickets:0
      });

    let name,value;
    const handleinputs=(e)=>{
        
      name=e.target.name
      value=e.target.value
      setevent({... event,[name]:value});
     console.log(event)
    //  console.log(name)
    //  console.log(value)
    } 
    // state.userdetails.email
    let username=state.data.email
    
    const PostData= async (e)=>{
        e.preventDefault();

        // createPost(postImage)
        let myFile=postImage.myFile
        let id=state.eventdetails.id
        const{name,description,ticket,date,time,numtickets}=event;
        error1 =true
        console.log("error :",error1)
        setcheck({error:"incorrect credentials"});
       const res = await fetch("/updateevent",{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({
         id,name,description,locations,Field,myFile,username,ticket,date,time,numtickets
       })
       
    
       });
      
       const data= await res.json();
       console.log(data.status)
       if(res.status == 421 ){
    console.log("plz fill it properly")
    // setcheck({error:"fill it properly"});
       }
      else if(res.status == 422 ){
        console.log("email already exists")
        // setcheck({error:"email already exists"});
           }
       else{
     console.log("Registration succesfull")
    //  setcheck({data});
  
    
    }
    
    // (navigate("/events",{state:{ eventdetails:product,data:props.data }}))
}

const handleChange  = async(e) => {
  //name=e.value
 let string2=""
 

 setlocation(e.value)
 
 // interest.push("") 
  //  console.log(interest1)
 
   console.log("initerest :",e.value)
   
 
  
 };
 const handleChange1  = async(e) => {

 

 setfield(e.value)
 // interest.push("") 
  //  console.log(interest1)
 
   console.log(e)
   
 
  
 };
const handleSubmit = (e) => {
  e.preventDefault();
  // createPost(postImage)
  console.log("Uploaded")
}
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  const base64 = await convertToBase64(file);
 
  setPostImage({ ...postImage, myFile : base64 })
}
let { data, error } = logincheck;
  return (
      <>

      <Dashboard data={user}/>
  
    <MDBContainer fluid >

      <MDBRow className='d-flex justify-content-center align-items-center'>

        <MDBCol lg='8' style={{maxWidth: '1500px',marginTop:'4%'}}>
       

{error &&  <div class="container" style={{width:'100%' ,marginTop:'-5%'}}> 
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Event Details Updated!</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</div> }
          <MDBCard className='my-5 rounded-3' style={{maxWidth: '1500px',marginTop:'40%'}}>
            {/* <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp'  style={{height: '300px'}} className='w-100 rounded-top'  alt="Sample photo"/> */}

            <MDBCardBody className='px-5' >
      

              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"style={{fontSize:"22px"}}>Update event</b> 
              <div>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px",marginTop:"80px"}}>Name</b>
              </div>
              <MDBInput wrapperClass='mb-4' name="name" label='Name' id='form1' style={{margin:"5px"}} type='text' value= {event.name}  onChange={handleinputs}/>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Description</b>
              <MDBInput wrapperClass='mb-4' name="description" label='Description' style={{margin:"5px"}} id='form1' type='text' value= {event.description}  onChange={handleinputs}/>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Ticket Price</b>
              <MDBInput wrapperClass='mb-4' name="ticket" label='Ticket Price' value= {event.ticket}  style={{margin:"5px"}} id='form1' type='number'min="0" oninput="validity.valid||(value='');"   onChange={handleinputs}/>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Number of Tickets</b>
              <MDBInput wrapperClass='mb-4' name="numtickets" label='Number of Tickets' value= {event.numticket}  style={{margin:"5px"}} id='form1' type='number'min="0" oninput="validity.valid||(value='');"   onChange={handleinputs}/>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Date</b>
              <div className="App">
      <Form.Control type="date" name="date" value= {event.date} style={{margin:"5px"}} onChange={handleinputs}></Form.Control>
    </div>
    <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Time</b>
    <div className="App">
      <Form.Control type="time" name="time" value= {event.time} style={{margin:"5px"}}onChange={handleinputs} ></Form.Control>
    </div>

              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"20px"}}>Upload Logo or image</b>
              <div>
              <label htmlFor="file-upload" className='custom-file-upload1'>
          <img src={postImage.myFile } alt="" />
        </label>

        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />
         </div>
           

            
               
                <b style={{marginTop:"30px",fontSize:"20px"}}>Select your Location</b>
      <Select
       
        // value={state1.selectedOptions}
        onChange={handleChange}
        options={options}
      />
       <b style={{margin:"10px",fontSize:"20px"}}>Select your Category</b>
      <Select
       
        // value={state1.selectedOptions}
        onChange={handleChange1}
        options={options1}
      />
       

                   
              {/* <MDBBtn  className='mb-1' size='lg' onClick={PostData}>Submit</MDBBtn> */}
              <button className='btn btn-primary' size='lg' onClick={PostData}>Edit event</button>
              <Link to={{pathname: "/events", search:`?email=${user.email}&name=${user.name}`}}>
              <button className='btn btn-primary' size='lg' >Go Back</button>
            </Link>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
  
    </MDBContainer>
    <MDBFooter className='text-center text-white' style={{ width:"2300px",height:"100px", backgroundColor: '#808080' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ marginTop:"260px",backgroundColor: '#808080' }}>
        © 2020 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </>
  );
}

export default EditEvent;