import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2'
import {Chart, registerables} from 'chart.js'
import {ToggleButtonGroup, ToggleButton} from "@mui/material";
import {GraphDataPiece} from "./LikesGraphMockData";
import "./LikesGraphStyle.css"

Chart.register(...registerables)

interface ChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		backgroundColor: string[];
		borderColor: string[];
		borderWidth: number;
	}[];
	options: {
		scales: {
			x: {
				display: boolean;
			};
			y: {
				display: boolean;
			};
		};
		plugins: any; // Update this with the actual structure of your plugins
	};
}

interface GraphComponentInterface {
	dayData: GraphDataPiece[];
	yearData: GraphDataPiece[];
}

const GraphComponent: React.FC<GraphComponentInterface> = ({dayData, yearData}) => {
	const [userData, setUserData] = useState<ChartData>({
		labels: dayData.map((data) => data.time),
		datasets: [{
			label: "Likes",
			data: dayData.map((data) => data.data),
			backgroundColor: ["#dbdcb8", "#81d4fa", "#d7e3a4"],
			borderColor: ["#4d4d4d", "#4d4d4d", "#4d4d4d"], // Add black border color for each bar
			borderWidth: 3
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
	});

	const handleTimePeriodChange = (value: 'month' | 'year') => {
		let data;
		if (value === 'month') {
			data = dayData;
		} else {
			data = yearData;
		}

		const newData = {
			labels: data.map((data) => data.time),
			datasets: [{
				label: "Likes",
				data: data.map((data) => data.data),
				backgroundColor: ["#dbdcb8", "#81d4fa", "#d7e3a4"],
				borderColor: ["#4d4d4d", "#4d4d4d", "#4d4d4d"], // Add black border color for each bar
				borderWidth: 3
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
		};

		setUserData(newData);
	};

	return (
		<div className="chart-wrapper">
			<div className="toggleTimeContainer">
				<ToggleButtonGroup className={"toggleButtonGroup"} color="primary" exclusive aria-label="Platform">
					<ToggleButton className="toggleButton"
						value='month'
						onClick={() => handleTimePeriodChange('month')}>
						Month
					</ToggleButton>
					<ToggleButton className="toggleButton"
						value='year'
						onClick={() => handleTimePeriodChange('year')}>
						Year
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
			<br></br>
			<Bar data={userData} options={userData.options}></Bar>
		</div>
	);
}

export default GraphComponent;
