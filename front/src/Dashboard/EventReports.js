import { useState,Component } from "react";
import Dashboard from "./DashBoard";
import { BarChart, LineChart,Bar, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{month: 'January', tickets: 400},{month: 'Febuary', tickets: 200},{month: 'March', tickets: 100}];
export default function EventReports(){

    
    return (
    
     <>
      <Dashboard/>
   
     <h4>Event reports are here</h4>
     <h4>Event reports are here</h4>
     <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="tickets" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="month" />
    <YAxis />
  </LineChart>
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="month"  />
    <YAxis />
    <Bar dataKey="tickets" barSize={30} fill="#8884d8"
      />
  </BarChart>
     </>

    )
    }

