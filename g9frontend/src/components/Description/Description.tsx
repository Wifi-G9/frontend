import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import "./DescriptionStyle.css"
const DescriptionWord = (data: { theWord: string }) => {
    const [descriptionText, setDescriptionText] = useState("Not available");

    const fetchData = useCallback((query: string): void => {
        try {
            if (query == "") {
                setDescriptionText("No description");
                return;
            }
            let apiUrl: string = `http://127.0.0.1:8000/describe?message=${query}`;
            let description: string = "";
            axios.get(apiUrl)
                .then((response) => {
                    description = response.data["response"];
                    setDescriptionText(description);
                    console.log(description);
                }).catch((error) => {
                console.error('Axios error when fetching data from backend for description:', error);
            });
        } catch (e) {
            console.error('Error fetching data from backend:', e);
        }
    }, []);

    useEffect(() => {
        fetchData(data.theWord);
    }, [fetchData, data]);

    return (
        <div className="Description">
            <h2>Description</h2>
            <p>{descriptionText}</p>
        </div>
    );
};

export default DescriptionWord;
