import React, { PureComponent, useState } from 'react';
import {Bar} from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import "./GraphStyle.css"
import {
    ToggleButtonGroup, ToggleButton
} from "@mui/material";
Chart.register(...registerables)

const GraphComponent: React.FC = ({}) => {
const data = [
  {
    name: "March",
    views: 4000,
  },
  {
    name: "April",
    views: 2000,
  },
  {
    name: "May",
    views: 3000,
  },
];



const [userData,setUserData]=useState({
    labels: data.map((data)=>data.name),
    datasets: [{
        label: "Views",
        data: data.map((data)=>data.views),
        backgroundColor: ["#dbdcb8","#81d4fa","#d7e3a4"],
        borderColor: ["#4d4d4d", "#4d4d4d", "#4d4d4d"], // Add black border color for each bar
        borderWidth: 5
    }],
    options: {
        scales: {
          x: {
            display: false, // hide x-axis labels
          },
          y: {
            display: false, // hide y-axis labels
          },
        },
        plugins: {
            legend: {
              display: false,
            },
          },
        
    }
})
 return(

    <div className="chart-wrapper" style={{ padding: '20px' }}>
        <div className="toggleTimeContainer">
                            <ToggleButtonGroup style={{backgroundColor:'#e9e9e9', fontFamily:'Inter, sans-serif', width: '100%', color: '#ffffff',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
    }}
                                color="primary"
                                exclusive
                                //onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton className="toggleButton" value='month' >Month</ToggleButton>
                                <ToggleButton className="toggleButton" value='year'>Year</ToggleButton>
                            </ToggleButtonGroup>

                </div>
        <Bar className='graph' data={userData} options={userData.options} ></Bar>
    </div>
 );
}

  export default GraphComponent;


