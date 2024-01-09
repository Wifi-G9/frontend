// PopularTrends.tsx
import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import "./SimilarTrendsStyle.css"

interface Trend {
    name: string;
    score: number;
}


const mocTrends: Trend[] = [

    {
        "name": "Machine learning",
        "score": 95
    },
    {
        "name": "Deep learning",
        "score": 90
    },
    {
        "name": "Natural language processing",
        "score": 85
    },
    {
        "name": "Computer vision",
        "score": 80
    },
    {
        "name": "Robotics",
        "score": 75
    }

];

const SimilarTrends = (data: {theWord: string})=> {
    const [trends, setTrends] = useState<Trend[]>([]);
    const useBackendData: boolean = false;

    const fetchData = useCallback(async (query: string) => {
        try {

            let apiUrl = `/similar-trends?count=${query}`;

            axios.get(apiUrl).then((response) => {
                let trends = response.data["response"];
                setTrends(trends);
            }).catch((error) => {
                console.error('Axios error when fetching data from backend for interest-over-time:', error);
            });
        } catch (error) {
            console.error('Error fetching trends:', error);
        }
    },[]);

    useEffect(() => {
        if (useBackendData) {
            fetchData(data.theWord).then(() => {
                    console.log(trends);
                }
            );
        } else {
            setTrends(mocTrends);
        }
    }, [fetchData, data, trends, useBackendData]);


    return (
        <div className="SimilarTrends">
            <h2 className="SimilarTrends_h2">Similar Trends</h2>
            <ul>
                {trends.map((trend) => (
                    <li className="Similar_li_before" key={trend.name}>
                       {trend.name}
                        <br/>
                        Score: {trend.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SimilarTrends;
