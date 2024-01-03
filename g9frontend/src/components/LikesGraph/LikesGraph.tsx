import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2'
import {Chart, registerables} from 'chart.js'
import {ToggleButtonGroup, ToggleButton} from "@mui/material";
import {MonthGraphMockData, YearGraphMockData} from "./LikesGraphMockData";
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

const GraphComponent: React.FC = () => {
    // FIXME: change this to true if you want an actual call to the backend
    const useBackendData: boolean = false;
    const [dataPopulated, setDataPopulated] = useState<boolean>(false);

    const [userData, setUserData] = useState<ChartData>({
        labels: [],
        datasets: [{
            label: "Likes",
            data: [],
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

    const fetchData = useCallback(async (timePeriod: 'month' | 'year') => {
        try {
            let data: any[] = [];

            if (useBackendData) {
                let query = "cats";
                const today = new Date();
                // you need to add +1 to months, bc they start from 0... very dumb...
                let start_date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
                let end_date;
                if (timePeriod === "month") {
                    end_date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
                } else {
                    end_date = `${today.getFullYear() - 1}-${today.getMonth() + 1}-${today.getDate()}`;
                }
                let apiUrl = `/interest-over-time?query=${query}&start_date=${start_date}&end_date=${end_date}`;

                try {
                    axios.get(apiUrl).then((response) => {
                        data = response.data["interest"];
                    }).catch((error) => {
                        console.error('Axios error when fetching data from backend for interest-over-time:', error);
                    });
                } catch (e) {
                    console.error('Error fetching data from backend:', e);
                }
            } else {
                if (timePeriod === 'month') {
                    data = MonthGraphMockData;
                } else {
                    data = YearGraphMockData;
                }
            }

            const newData = {
                labels: data.map((data) => data.date),
                datasets: [{
                    label: "Likes",
                    data: data.map((data) => data.interest),
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
        } catch (error) {
            console.error('Error fetching data from backend:', error);
            // Handle errors
        }
    }, [useBackendData]);

    const handleTimePeriodChange = async (value: 'month' | 'year') => {
        await fetchData(value);
    };

    useEffect(() => {
        if (!dataPopulated) {
            fetchData("month").then(); // initial value will be month because IDK
            setDataPopulated(true);
        }
    }, [dataPopulated, fetchData]);

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


