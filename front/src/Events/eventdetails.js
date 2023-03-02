import { useState,Component } from "react";
import {Navlink,useNavigate,useLocation} from "react-router-dom"
import img4 from'../Components/pic1.jpg'
import Comments from '../comment_Forum/Comments'
import Navbar from '../Components/Navbar'
import avatar from '../download.png'
export default function Eventdetails(){
    const {state} = useLocation();
    
    
    return (
        <>
        <div>
        <Navbar/>
        </div>
        <div>
        <img src={img4} style={{marginLeft:"500px", width:"700px",height:"300px"}} class="img-fluid" alt="Responsive image"/>

        </div>
          <div class="container1 h-100"style={{marginTop:"-200px",width:"1000px",marginLeft:"320px"}}>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-15 col-xl-15">
      <button style={{marginLeft:"1100px",marginTop:"100px",width:"200px",height:"50px"}} class="btn btn-primary" to='/dashboard'>Buy ticket</button> 
        <p style={{marginLeft:"1100px",marginTop:"10px",width:"200px",height:"50px"}}>tickete remaining 5</p>
        {/* <div class="card text-black" >
          <div class="card-body p-md-9"> */}
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"></div>
        <b style={{margin:"30px",fontSize:"40px"}}>{state.name}:</b>
        
        
        <p>Binance Workshop Pakistan is part of a larger series of workshops taking place in the MENA region. Each interactive and bespoke session will offer you an intimate learning experience, where you get to learn more about blockchain’s decentralization implementation development, blockchain apps, and more in this 3-hour intimate workshop.

With Pakistan's third ranking in the crypto global adoption index (as per 2021 data) and status as a high-priority MENAP market, the country makes for a fitting workshop location. Most of the population is under 35, technologically savvy, and ready to grasp the opportunities that crypto and blockchain can bring.

Learn and be rewarded! Come join us in this educational workshop and stand a chance to take home a Binance Swag.

Don’t forget to tag us on social media with the hashtag #BinanceWorkshop!

Networking

Get to meet and mingle up close with industry leaders, like-minded individuals and fellow Binancians at the workshop during the networking session over some light refreshments.

Secure Your Spot!

The workshop is complimentary for all to attend. Only 150 slots available on first-come, first-served basis. Secure your spot today!

Disclaimer: Only registered attendees will be allow to enter the venue. We regret to inform that any unregistered attendees would be rejected at the door. 
        </p>

        <p>Binance Workshop Pakistan is part of a larger series of workshops taking place in the MENA region. Each interactive and bespoke session will offer you an intimate learning experience, where you get to learn more about blockchain’s decentralization implementation development, blockchain apps, and more in this 3-hour intimate workshop.

With Pakistan's third ranking in the crypto global adoption index (as per 2021 data) and status as a high-priority MENAP market, the country makes for a fitting workshop location. Most of the population is under 35, technologically savvy, and ready to grasp the opportunities that crypto and blockchain can bring.

Learn and be rewarded! Come join us in this educational workshop and stand a chance to take home a Binance Swag.

Don’t forget to tag us on social media with the hashtag #BinanceWorkshop!

Networking

Get to meet and mingle up close with industry leaders, like-minded individuals and fellow Binancians at the workshop during the networking session over some light refreshments.

Secure Your Spot!

The workshop is complimentary for all to attend. Only 150 slots available on first-come, first-served basis. Secure your spot today!

Disclaimer: Only registered attendees will be allow to enter the venue. We regret to inform that any unregistered attendees would be rejected at the door. 
        </p>
        <p>Binance Workshop Pakistan is part of a larger series of workshops taking place in the MENA region. Each interactive and bespoke session will offer you an intimate learning experience, where you get to learn more about blockchain’s decentralization implementation development, blockchain apps, and more in this 3-hour intimate workshop.

With Pakistan's third ranking in the crypto global adoption index (as per 2021 data) and status as a high-priority MENAP market, the country makes for a fitting workshop location. Most of the population is under 35, technologically savvy, and ready to grasp the opportunities that crypto and blockchain can bring.

Learn and be rewarded! Come join us in this educational workshop and stand a chance to take home a Binance Swag.

Don’t forget to tag us on social media with the hashtag #BinanceWorkshop!

Networking

Get to meet and mingle up close with industry leaders, like-minded individuals and fellow Binancians at the workshop during the networking session over some light refreshments.

Secure Your Spot!

The workshop is complimentary for all to attend. Only 150 slots available on first-come, first-served basis. Secure your spot today!

Disclaimer: Only registered attendees will be allow to enter the venue. We regret to inform that any unregistered attendees would be rejected at the door. 
        </p>

        

        {/* <b style={{margin:"30px",fontSize:"40px"}}>{state.name}</b>
        <b style={{margin:"30px",fontSize:"40px"}}>{state.description}</b> */}

       
 </div>
 </div>
 </div>
 </div>
 {/* </div>
 </div> */}
 
 <div >
 <Comments eventid={state.id}/>
 </div>
 <div>
 
 </div>
       </>
    )
}