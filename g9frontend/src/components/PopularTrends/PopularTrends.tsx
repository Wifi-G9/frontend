// PopularTrends.tsx
import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import "./PopularTrendsStyles.css"

interface Trend {
    title: string;
    description: string;
}


const mocTrends: Trend[] = [
    {
        "title": "Artificial Intelligence",
        "description": "The development of intelligent agents, which are systems that can reason, learn, and act autonomously."
    },
    {
        "title": "Metaverse",
        "description": "A hypothetical iteration of the Internet as a single, universal and immersive virtual world that is facilitated by the use of virtual reality and augmented reality headsets."
    },
    {
        "title": "Climate Change",
        "description": "Long-term shifts in temperatures and weather patterns, mainly caused by human activities, especially the burning of fossil fuels."
    },
    {
        "title": "Cryptocurrency",
        "description": "A digital or virtual currency that uses cryptography for security. It is decentralized, meaning it is not subject to government or financial institution control."
    },
    {
        "title": "Electric Vehicles",
        "description": "Electric vehicles (EVs) are cars, trucks, buses, and motorcycles that run on electricity instead of gasoline or diesel."
    },

];

const PopularTrends: React.FC = ()=> {
    const [trends, setTrends] = useState<Trend[]>([]);
    const useBackendData: boolean = false;

    const fetchData = useCallback(async (number: number) => {
        try {

            let apiUrl = `/popular-trends?count=${number}`;

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
            fetchData(5).then(() => {
                    console.log(trends);
                }
            );
        } else {
            setTrends(mocTrends);
        }
    }, [fetchData, trends, useBackendData]);


    return (
        <div className="PopularTrends">
            <h2 className="PopularTrends_h2">Popular Trends</h2>
            <ul className="PopularTrends_ul">
                {trends.map((trend) => (
                    <li className="PopularTrends_li_before" key={trend.title}>
                        <div className="title">
                            {trend.title}
                        </div>
                        <div>
                            {trend.description}
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularTrends;
