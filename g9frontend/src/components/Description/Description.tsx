import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

const DescriptionWord = (data: { theWord: string }) => {
    // FIXME: change this to true if you want an actual call to the backend
    const useBackendData: boolean = true;
    const [descriptionText, setDescriptionText] = useState("Not available");

    const fetchData = useCallback(async (query: string) => {
        try {
            let apiUrl = `http://127.0.0.1:8000/describe?message=${query}`;
            console.log(apiUrl, query);
            axios.get(apiUrl).then((response) => {
                let description = response.data["response"];
                console.log(description);
                setDescriptionText(description);
            }).catch((error) => {
                console.error('Axios error when fetching data from backend for description:', error);
            });
        } catch (e) {
            console.error('Error fetching data from backend:', e);
        }
    }, []);

    useEffect(() => {
        if (useBackendData) {
            fetchData(data.theWord).then(() => {
                    console.log(descriptionText);
                }
            );
        } else {
            setDescriptionText(`${descriptionText}`);
        }
    }, [fetchData, data, descriptionText, useBackendData]);

    return (
        <div>
            <h2>Description</h2>
            <p>{descriptionText}</p>
        </div>
    );
};

export default DescriptionWord;
