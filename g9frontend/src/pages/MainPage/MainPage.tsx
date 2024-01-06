import React, {useState, useCallback} from "react";
import axios from 'axios';
import {
    Container,
    Button,
    ToggleButtonGroup,
} from "@mui/material";
import "./MainPageStyle.css";
import SearchBarComponent from "../../components/SearchBar/SearchBar";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import SendUsAMessageButtonComponent from "../../components/SendUsAMessageButton/SendUsAMessageButton";
import DescriptionWord from "../../components/Description/Description";
import InstagramComponent from "../../components/GetInsta/GetInsta";
import GraphComponent from "../../components/Graph/Graph";
import {Link} from "react-router-dom";


export const MainPage: React.FC = () => {
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
    const [posts, setPosts] = useState<React.CElement<any, any>>();

    const [wordOfTheDay, setWordOfTheDay] = useState<string>('Search')
    const [theWord, setSearchTerm] = useState('wordOfTheDay');

    const fetchWordOfTheDay = useCallback(async () => {
        try {
            let apiUrl = `127.0.0.1:8000/wordOfTheDay`;
            axios.get(apiUrl).then((response) => {
                let word = response.data["response"];
                setWordOfTheDay(word);
            }).catch((error) => {
                console.error('Axios error when fetching data from backend for interest-over-time:', error);
            });
        } catch (e) {
            console.error('Error fetching data from backend:', e);
        }
    }, []);

    fetchWordOfTheDay();
    const handleSearch = (searchTerm: string) => {
        console.log("User searched for:", theWord);
        setSearchTerm(searchTerm);
    };

    const handleSelect = (selectedButton: string): void => {
        setSelectedPlatform(selectedButton);

        // FIXME: hack to set the word before the searched word PR is merged
        // setSearchTerm("cats");

        if (selectedButton === "instagram") {
            if (theWord === null) {
                console.error("Cannot render instagram post, the search word is not set.");
            } else {
                setPosts(<InstagramComponent query={theWord}/>);
            }
        } else {
            setPosts(<div>
                <p>Not available</p>
            </div>);
        }
    }

    return (
        <Container>
            <div className="container">
                <div className="header">
                    <p className="logo">WiFi</p>
                    <Button component={Link} to="/login" style={{
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
                    <div className="mainPageLeftContainer">
                        <div className="GraphContainer">
                            <GraphComponent/>
                            <DescriptionWord theWord={theWord}/>
                        </div>
                    </div>
                    <div className="mainPageRightContainer">
                        <div className="searchBarContainer">
                            <SearchBarComponent wordOfTheDay={wordOfTheDay} onSearch={handleSearch}/>
                        </div>
                        <div className="mainPageToggleGroupContainer">
                            <ToggleButtonGroup
                                style={{backgroundColor: '#e9e9e9', fontFamily: 'Inter, sans-serif', width: '100%'}}
                                color="primary"
                                exclusive
                                aria-label="Platform"
                            >
                                <ToggleButton className="toggleButton" value='instagram'
                                              isSelected={selectedPlatform === "instagram"}
                                              onSelect={() => handleSelect("instagram")}>Instagram</ToggleButton>
                                <ToggleButton className="toggleButton" value='facebook'
                                              isSelected={selectedPlatform === "facebook"}
                                              onSelect={() => handleSelect("facebook")}>Facebook</ToggleButton>
                                <ToggleButton className="toggleButton" value='X' isSelected={selectedPlatform === "x"}
                                              onSelect={() => handleSelect("x")}>X</ToggleButton>
                            </ToggleButtonGroup>
                            <div className="mainPagePostContentContainer">
                                {(selectedPlatform) &&
                                    (posts)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <SendUsAMessageButtonComponent/>
            </div>
        </Container>
    )
}
