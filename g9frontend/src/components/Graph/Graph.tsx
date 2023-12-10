import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2'
import {Chart, registerables} from 'chart.js'
import {ToggleButtonGroup, ToggleButton} from "@mui/material";
import {MonthGraphMockData, YearGraphMockData} from "./GraphMockData";
import "./GraphStyle.css"

Chart.register(...registerables)

interface ChartData {
    labels: number[];
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

const GraphComponent = (data: {theWord: string}) => {
    // FIXME: change this to true if you want an actual call to the backend
    const useBackendData: boolean = true;
    const [dataPopulated, setDataPopulated] = useState<boolean>(false);

    const [userData, setUserData] = useState<ChartData>({
        labels: [],
        datasets: [{
            label: "Views",
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

    const fetchData = useCallback(async (timePeriod: 'month' | 'year', query: string) => {
        if (query == "") {
            return;
        }
        let graph_data: any[] = [];
        try {
            if (useBackendData) {
                let apiUrl = `http://127.0.0.1:8000/interest-over-time?search=${query}&time=${timePeriod}`;

                try {
                    axios.get(apiUrl).then((response) => {
                        graph_data = response.data["interest_over_time"];
                        const newData = {
                            labels: graph_data.map((data) => data.date),
                            datasets: [{
                                label: "Interest",
                                data: graph_data.map((data) => data.interest),
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
                    }).catch((error) => {
                        console.error('Axios error when fetching data from backend for interest-over-time:', error);
                    });
                } catch (e) {
                    console.error('Error fetching data from backend:', e);
                }
            } else {
                if (timePeriod === 'month') {
                    graph_data = MonthGraphMockData;
                } else {
                    graph_data = YearGraphMockData;
                }
            }
        } catch (error) {
            console.error('Error fetching data from backend:', error);
            // Handle errors
        }
    }, [useBackendData]);

    const handleTimePeriodChange = async (value: 'month' | 'year') => {
        await fetchData(value, data.theWord);
    };

    useEffect(() => {
        fetchData("month", data.theWord);
    }, [fetchData, data]);

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


