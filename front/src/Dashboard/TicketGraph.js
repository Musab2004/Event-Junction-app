import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample JSON data
// const jsonData = {
//   "tickets": [
//     { "id": 1, "date": "2022-04-21" },
//     { "id": 2, "date": "2022-04-21" },
//     { "id": 3, "date": "2022-04-22" },
//     { "id": 4, "date": "2022-04-23" },
//     { "id": 5, "date": "2022-04-23" },
//     { "id": 6, "date": "2022-04-23" },
//     { "id": 7, "date": "2022-04-24" },
//     { "id": 8, "date": "2022-04-24" }
//   ]
// };

// Extract the ticket IDs and dates

// Create the component for the bar graph using React and Bootstrap
const Graph = (props) => {
    let jsonData=props.ticketData
    
    const ticketIds = jsonData.map(ticket => ticket.id);
const ticketDates = jsonData.map(ticket => ticket.time);

// Group the dates by the number of tickets sold on each date
const dateGroups = ticketDates.reduce((groups, date) => {
  const count = groups[date] ? groups[date] + 1 : 1;
  return { ...groups, [date]: count };
}, {});

// Create the data for the bar graph
const data = {
  labels: Object.keys(dateGroups),
  datasets: [
    {
      label: 'Number of Tickets Sold',
      data: Object.values(dateGroups),
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    },
  ],
};

// Set the options for the bar graph
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

  return (
  
    //   <div className="row">
    //     <div className="col">
          <Bar data={data} options={options} />
    //     </div>
    //   </div>
   
  );
};

export default Graph;