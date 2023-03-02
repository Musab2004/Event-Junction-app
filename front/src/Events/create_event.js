import React,{useState} from 'react'; 
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import Dashboard from '../Dashboard/DashBoard';







function App() {
    const[event,setevent]=useState({
        id:"",name:"",description:""
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
    const PostData= async (e)=>{
        e.preventDefault();
        
        
        const{id,name,description}=event;
       const res = await fetch("/postevent",{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({
         id,name,description
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


  return (
      <>
      <Dashboard/>
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center'>

        <MDBCol lg='8'>

          <MDBCard className='my-5 rounded-3' style={{maxWidth: '600px'}}>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top'  alt="Sample photo"/>

            <MDBCardBody className='px-5'>

              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Create Event</h3>
              <MDBInput wrapperClass='mb-4' name="name" label='Name' id='form1' type='text' value= {event.name}  onChange={handleinputs}/>
              <MDBInput wrapperClass='mb-4' name="description" label='Description' id='form1' type='text' value= {event.description}  onChange={handleinputs}/>
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

              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4'  name="id" label='Registration code' id='form3' type='text'value= {event.id}  onChange={handleinputs}/>
                </MDBCol>
              </MDBRow>
            
              <MDBBtn color='success' className='mb-4' size='lg' onClick={PostData}>Submit</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default App;