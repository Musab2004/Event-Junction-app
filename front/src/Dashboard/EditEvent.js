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
  const navigate = useNavigate();
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
  //  user.name=state.userdetails.name
  //  user.email=state.userdetails.email
   console.log(user)
  const {field}=Field
  const {location}=locations
  // const{query} = useParams();

  let image1=null
  // const {state} = useLocation();
  const [postImage, setPostImage] = useState( { myFile : ""})
  const [getImage, setgetImage] = useState( { myFile : ""})
  let [error1, seterror1] = useState(false)
  let[event,setevent]=useState({
    name:state.eventdetails.name,description:state.eventdetails.description,ticket:state.eventdetails.ticket,date:state.eventdetails.date,time:state.eventdetails.time,numtickets:state.eventdetails.numtickets,Orgname:state.eventdetails.Orgname,exactloc:state.eventdetails.exactloc
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
    let username=state.userdetails.email
    
    const PostData= async (e)=>{
        e.preventDefault();

        // createPost(postImage)
        let myFile=postImage.myFile
        event.myFile=postImage.myFile
        // let id=state.eventdetails.id
        const{name,description,ticket,date,time,numtickets,Orgname,exactloc}=event;
        error1 =true
        console.log("error :",error1)
        setcheck({error:"incorrect credentials"});
       const res = await fetch("/updateevent",{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({
        name,description,locations,Field,myFile,username,ticket,date,time,numtickets,Orgname,exactloc
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
function getCurrentTime() {
  const now = new Date(); // get the current date and time
  const hours = now.getHours().toString().padStart(2, "0"); // format hours to have 2 digits
  const minutes = now.getMinutes().toString().padStart(2, "0"); // format minutes to have 2 digits
  return `${hours}:${minutes}`; // return time in HH:MM format
}
function getCurrentDate() {
  const now = new Date(); // get the current date
  const year = now.getFullYear().toString(); // get the current year as a string
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // get the current month as a string with 2 digits
  const day = now.getDate().toString().padStart(2, "0"); // get the current day as a string with 2 digits
  return `${year}-${month}-${day}`; // return date in YYYY-MM-DD format
}
const [inputValue, setInputValue] = useState({
 data: "hie man"
});
console.log(inputValue)
// Event handler function that updates the state with the user's input
function handleInputChange(event) {
  setInputValue(event.target.value);
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
const tomanageevents= async (e)=>{
  (navigate("/events",{state:{ userdetails:state.userdetails}}))
}
  return (
      <>

      <Dashboard data={state.userdetails}/>
  
    <MDBContainer fluid >

      <MDBRow className='d-flex justify-content-center align-items-center'>

        <MDBCol lg='8' style={{maxWidth: '1500px',marginTop:'4%'}}>
       

{error &&  <div class="container" style={{width:'100%' ,marginTop:'-5%'}}> 
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Event Details Updated!</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</div> }


          <MDBCard className='my-5 rounded-3' style={{maxWidth: '1500px'}}>
            {/* <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp'  style={{height: '300px'}} className='w-100 rounded-top'  alt="Sample photo"/> */}

            <MDBCardBody className='px-5'>

              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"style={{fontSize:"22px"}}>Create Event</b>
              <div>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px",marginTop:"80px"}}>Name</b>
              </div>
              <MDBInput wrapperClass='mb-4' name="name" label='Name' id='form1' style={{margin:"5px"}} type='text' value= {event.name}  onChange={handleinputs}/>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Description</b>
              <div>
              <textarea
            style={{width:'550px',hieght:'200px'}}
           className="comment-form-textarea"
           name="description"
        value= {event.description}  onChange={handleinputs}
      />
      </div>
              {/* <MDBInput wrapperClass='mb-4' name="description" label='Description' style={{margin:"5px"}} id='form1' type='text' value= {event.description}  onChange={handleinputs}/> */}
              
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Organization Name</b>
              <MDBInput wrapperClass='mb-4' name="Orgname" label='Organization Name' id='form1' style={{margin:"5px"}} type='text' value= {event.Orgname}  onChange={handleinputs}/>
             
              <b style={{marginTop:"30px",fontSize:"16px"}}>Select your Location</b>
      <Select
       
        // value={state1.selectedOptions}
        onChange={handleChange}
        options={options}
      />
      <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Exact Location</b>
              <MDBInput wrapperClass='mb-4' name="exactloc" label='Exact Location' id='form1' style={{margin:"5px"}} type='text' value= {event.exactloc}  onChange={handleinputs}/>
      <div style={{marginTop:'10px'}}>
       <b style={{marginTop:'20px',fontSize:"16px"}}>Select your Category</b>
      <Select
       
        // value={state1.selectedOptions}
        onChange={handleChange1}
        options={options1}
      />
           </div>  
             
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Number of Tickets</b>
              <MDBInput wrapperClass='mb-4' name="numtickets" label='Number of Tickets' value= {event.numtickets}  style={{margin:"5px"}} id='form1' type='number'min="0" oninput="validity.valid||(value='');"   onChange={handleinputs}/>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Ticket Price</b>
              <MDBInput wrapperClass='mb-4' name="ticket" label='Ticket Price' value= {event.ticket}  style={{margin:"5px"}} id='form1' type='number'min="0" oninput="validity.valid||(value='');"   onChange={handleinputs}/>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Date</b>
              <div className="App">
      <Form.Control type="date" name="date" value= {event.date} style={{margin:"5px"}} onChange={handleinputs}min={getCurrentDate()}></Form.Control>
    </div>
    <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Time</b>
    <div className="App">
      <Form.Control type="time" name="time" value= {event.time} style={{margin:"5px"}}onChange={handleinputs} min={getCurrentTime()}  ></Form.Control>
  
    </div>

              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"20px"}}>Upload Logo or image</b>
              <div>
              <label htmlFor="file-upload" className='custom-file-upload1'>
          <img src={postImage.myFile || state.eventdetails.myFile} alt="" />
        </label>

        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />
          <Form.Control
      type="text"
      value={inputValue.data}
      onChange={handleInputChange}
    />
         </div>
           

            
               
   

                   
              {/* <MDBBtn  className='mb-1' size='lg' onClick={PostData}>Submit</MDBBtn> */}
              <button className='btn btn-primary' size='lg' onClick={PostData}>Edit event</button>
            
              <button className='btn btn-primary' onClick={tomanageevents} size='lg' >Go Back</button>
           
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
  
    </MDBContainer>
   
    </>
  );
}

export default EditEvent;