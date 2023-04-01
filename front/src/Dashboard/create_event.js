import React,{useState} from 'react'; 
import {Navlink,useNavigate,useParams,useLocation} from "react-router-dom"
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
import Dashboard from '../Dashboard/DashBoard';
import Select from 'react-select';
import './createevent.css'
import { escapeRegExpChars } from 'ejs/lib/utils';




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
function App() {
  const[locations,setlocation]=useState({
    
  });
  const[Field,setfield]=useState({
    
  });
  const {field}=Field
  const {location}=locations
  // const{query} = useParams();
  let { search } = useLocation();
  console.log(search)
  let email=""
  for(let i=1;i<search.length;i++){
     email=email+search[i]
  }
  console.log(email)
  let image1=null
  // const {state} = useLocation();
  const [postImage, setPostImage] = useState( { myFile : ""})
  const [getImage, setgetImage] = useState( { myFile : ""})
    const[event,setevent]=useState({
        id:0,name:"",description:"",
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
    let username=email
    const PostData= async (e)=>{
        e.preventDefault();

        // createPost(postImage)
        let myFile=postImage.myFile
        const{id,name,description}=event;
       const res = await fetch("/postevent",{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({
         id,name,description,locations,Field,myFile,username
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
}
// const createPost = async (newImage) => {
//   // console.log(newImage)
//   let a="1"
//   // let myFile=newImage.myFile
//   try{
//     const res = await fetch("/uploads",{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({
//         myFile,
//         a
//       })
      
   
//       });
//        const data= await res.json();
//       //  const buffer = Buffer.from(base64, "base64");
//       //  fs.writeFileSync("new-path.jpg", buffer);
     
//       setgetImage({myFile:data.myFile})
//        image1=data.myFile
//       console.log(getImage.myFile)
//       // console.log(postImage.myFile)
//     // await axios.post(url, newImage)
//   }catch(error){
//     console.log(error)
//   }

// }
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

  return (
      <>
      <Dashboard email={email}/>
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center'>

        <MDBCol lg='8'>

          <MDBCard className='my-5 rounded-3' style={{maxWidth: '1500px'}}>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp'  style={{height: '300px'}} className='w-100 rounded-top'  alt="Sample photo"/>

            <MDBCardBody className='px-5'>

              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"style={{fontSize:"22px"}}>Create Event</b>
              <div>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px",marginTop:"80px"}}>Name</b>
              </div>
              <MDBInput wrapperClass='mb-4' name="name" label='Name' id='form1' style={{margin:"5px"}} type='text' value= {event.name}  onChange={handleinputs}/>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Location</b>
              <MDBInput wrapperClass='mb-4' name="description" label='Description' style={{margin:"5px"}} id='form1' type='text' value= {event.description}  onChange={handleinputs}/>
              {/* <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"style={{fontSize:"16px"}}>Duration</b>
              <MDBInput wrapperClass='mb-4' name="description" style={{margin:"5px"}} label='Description' id='form1' type='text' value= {event.description}  onChange={handleinputs}/>
              <b className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2" style={{fontSize:"16px"}}>Organization name</b>
              <MDBInput wrapperClass='mb-4' name="description" label='Description' id='form1' style={{margin:"5px"}} type='text' value= {event.description}  onChange={handleinputs}/> */}
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
              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='datepicker mb-4' label='Select a date' id='form2' type='text'/>
                </MDBCol>

                <MDBCol md='6' className='mb-4'>
                  {/* <MDBSelect
                    data={[
                      { text: 'Gender', value: 1, disabled: true },
                      { text: 'Female', value: 2 },
                      { text: 'Male', value: 3 }
                    ]}
                    /> */}
                </MDBCol>

              </MDBRow>

              {/* <MDBSelect
                className='mb-4'
                data={[
                  { text: 'Class', value: 1, disabled: true },
                  { text: 'Class 1', value: 2 },
                  { text: 'Class 2', value: 3 },
                  { text: 'Class 3', value: 3 }
                ]}
                /> */}

            
                 <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4'  name="id" label='Registration code' id='form3' type='text'value= {event.id}  onChange={handleinputs}/>
                </MDBCol>
              
              
              {/* <MDBBtn  className='mb-1' size='lg' onClick={PostData}>Submit</MDBBtn> */}
              <button className='btn btn-primary' size='lg' onClick={PostData}>Submit</button>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
      <b style={{margin:"10px",fontSize:"20px"}}>Select your interests</b>
      <Select
       
        // value={state1.selectedOptions}
        onChange={handleChange}
        options={options}
      />
       <b style={{margin:"10px",fontSize:"20px"}}>Select your interests</b>
      <Select
       
        // value={state1.selectedOptions}
        onChange={handleChange1}
        options={options1}
      />
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

export default App;