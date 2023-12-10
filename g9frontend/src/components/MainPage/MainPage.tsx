import React, {useState, useCallback, useEffect} from "react";
import axios from 'axios';
import {
    Container,
    Button,
    ToggleButtonGroup,
} from "@mui/material";
import "./MainPageStyle.css";
import SearchBarComponent from "../SearchBar/SearchBar";
import ToggleButton from "../ToggleButton/ToggleButton";
import SendUsAMessageButtonComponent from "../SendUsAMessageButton/SendUsAMessageButton";
import DescriptionWord from "../Description/Description";
import SelectPlatform from "../SelectPlatform/SelectPlatform";
import GraphComponent from "../Graph/Graph";


export const MainPage: React.FC = () => {
    const [wordOfTheDay, setWordOfTheDay] = useState<string>('');
    const [theWord, setSearchTerm] = useState('');

    useEffect(() => {
        if (theWord == "") {
            fetchWordOfTheDay();
        }
    }, []);

    const fetchWordOfTheDay = useCallback(async () => {
        try {
            let apiUrl = `http://127.0.0.1:8000/`;
            axios.get(apiUrl).then((response) => {
                let word = response.data["word_searched"];
                setSearchTerm(word);
                setWordOfTheDay(word);
            }).catch((error) => {
                console.error('Axios error when fetching data from backend for wordOfTheDay:', error);
            });
        } catch (e) {
            console.error('Error fetching data from backend:', e);
        }
    }, []);

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    return (
        <Container>
            <div className="container">
                <div className="header">
                    <p className="logo">WiFi</p>
                    <Button style={{
                        textTransform: 'none',
                        color: '#f7fefe',
                        right: '3%',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '20px'
                    }}>
                        Log in
                    </Button>
                </div>
                <div className="content">
                    <div className="leftContainer">
                        <div className="GraphContainer">
                            <GraphComponent theWord={theWord}/>
                            <DescriptionWord theWord={theWord}/>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="searchBarContainer">
                            <SearchBarComponent wordOfTheDay={wordOfTheDay} onSearch={handleSearch}/>
                        </div>
                        <SelectPlatform theWord={theWord}/>
                    </div>
                </div>
                <SendUsAMessageButtonComponent/>
            </div>
        </Container>
    )
}
