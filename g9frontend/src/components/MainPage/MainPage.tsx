import React, {useState} from "react";
import {
    Container,
    Button,
    ToggleButtonGroup,
    IconButton,
} from "@mui/material";
import "./MainPageStyle.css";
import SearchBarComponent from "../SearchBar/SearchBar";
import ToggleButton from "../ToggleButton/ToggleButton";
import MessageIcon from '@mui/icons-material/Message';
import SendUsAMessageButtonComponent from "../SendUsAMessageButton/SendUsAMessageButton";
import DescriptionWord from "../Description/Description";
import InstagramComponent from "../GetInsta/GetInsta";
import GraphComponent from "../Graph/Graph";


export const MainPage: React.FC = () => {
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
    const [posts, setPosts] = useState<React.CElement<any, any>>();

    const [theWord, setSearchTerm] = useState('');

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    const handleSelect = (selectedButton: string): void => {
        setSelectedPlatform(selectedButton);

        // FIXME: hack to set the word before the searched word PR is merged
        setSearchTerm("cats");

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
                            <GraphComponent/>
                            <DescriptionWord />
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="searchBarContainer">
                            <SearchBarComponent onSearch={handleSearch}/>
                                    Searched component: {theWord}

                        </div>
                        <div className="toggleGroupContainer">
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
                            <div className="postContentContainer">
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
