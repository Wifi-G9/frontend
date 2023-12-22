import React, {useState} from "react";
import {Button, Container, ToggleButtonGroup} from "@mui/material";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import SendUsAMessageButtonComponent from "../../components/SendUsAMessageButton/SendUsAMessageButton";
import {useParams} from "react-router-dom";
import "./UserPageStyle.css";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export const UserPage: React.FC = () => {
    const [selectedPlatform, setSelectedPlatform] = useState<string>("Instagram");
    const {username} = useParams();

    const styles = {
        blueButton: {
            width: 300,
            height: 50,
            backgroundColor: "#2196f3", /* Blue background color */
            color: "#ffffff", /* White text color */
            padding: "10 20",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            cursor: "pointer"
        }
    }

    const handleSelect = (selectedButton: string): void => {
        setSelectedPlatform(selectedButton);
        console.log(username);
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
                    }} to="/" component={Link} color="inherit" sx={{mr: 5}}>
                        <HomeIcon sx={{mr: 1}}/>
                        Home Page
                    </Button>
                </div>
                <div className="content">
                    <div className="leftContainer">
                        <div className="centeredContainer">
                            <div className="welcomeText">
                                Welcome {username}!
                            </div>
                            <div>
                                <Button className="blueButton" style={styles.blueButton}>
                                    Craft your post
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="toggleGroupContainer">
                            <ToggleButtonGroup
                                style={{backgroundColor: '#e9e9e9', fontFamily: 'Inter, sans-serif', width: '100%'}}
                                color="primary"
                                exclusive
                                aria-label="Platform"
                            >
                                <ToggleButton className="toggleButton" value='Instagram'
                                              isSelected={selectedPlatform === "Instagram"}
                                              onSelect={() => handleSelect("Instagram")}>Instagram</ToggleButton>
                                <ToggleButton className="toggleButton" value='Facebook'
                                              isSelected={selectedPlatform === "Facebook"}
                                              onSelect={() => handleSelect("Facebook")}>Facebook</ToggleButton>
                                <ToggleButton className="toggleButton" value='X' isSelected={selectedPlatform === "X"}
                                              onSelect={() => handleSelect("X")}>X</ToggleButton>
                            </ToggleButtonGroup>
                            <div className="groupContainerContent">
                                <Container>
                                    <div className="centeredContainer"
                                         style={{display: "flex", flexDirection: "column"}}
                                    >
                                        <div className="largeText"
                                             style={{marginBottom: 20}}
                                        >
                                            Please login to {selectedPlatform} to access this content
                                        </div>
                                        <Button className="blueButton" style={styles.blueButton}>
                                            Login to {selectedPlatform}
                                        </Button>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
                <SendUsAMessageButtonComponent/>
            </div>
        </Container>
    );
}
