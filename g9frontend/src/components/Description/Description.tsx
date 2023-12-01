import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

const DescriptionWord = (data: { theWord: string }) => {
    // FIXME: change this to true if you want an actual call to the backend
    const useBackendData: boolean = false;
    const [descriptionText, setDescriptionText] = useState("Not available");

    const fetchData = useCallback(async (query: string) => {
        try {
            let apiUrl = `/describe?message=${query}`;

            axios.get(apiUrl).then((response) => {
                let description = response.data["response"];
                setDescriptionText(description);
            }).catch((error) => {
                console.error('Axios error when fetching data from backend for interest-over-time:', error);
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
