import React from "react";

import {
    Container, TextField, Button, ToggleButtonGroup, ToggleButton, IconButton,
} from "@mui/material";
import {Link} from "react-router-dom";
import "./MainPageStyle.css"
import SearchBarComponent from "../SearchBar/SearchBar";
import { CenterFocusStrong } from "@mui/icons-material";
import MessageIcon from '@mui/icons-material/Message';
import SendUsAMessageButtonComponent from "../SendUsAMessageButton/SendUsAMessageButton";


export const MainPage: React.FC = () => {
    return(
        <Container>
            <div className="container">
                <div className="header">
                    <p className="logo">WiFi</p>
                    <Button style={{textTransform: 'none', color:'#f7fefe', right:'3%', fontFamily:'Inter, sans-serif', fontSize:'20px'}}>
                        Log in
                    </Button>
                </div>
                <div className="content">
                    <div className="leftContainer">
                        {/*here will be the graph part*/}
                    </div>
                    <div className="rightContainer">
                        <div className="searchBarContainer">
                            {/*<TextField style={{marginLeft:"8px"}}*/}
                            {/*    id="searchbar"*/}
                            {/*    label="Search a word"*/}
                            {/*    variant="outlined"*/}
                            {/*/>*/}
                            <SearchBarComponent/>
                        </div>
                        <div className="toggleGroupContainer">
                            <ToggleButtonGroup style={{backgroundColor:'#e9e9e9', fontFamily:'Inter, sans-serif', width: '100%'}}
                                color="primary"
                                exclusive
                                //onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton className="toggleButton" value='instagram'>Instagram</ToggleButton>
                                <ToggleButton className="toggleButton" value='facebook'>Facebook</ToggleButton>
                                <ToggleButton className="toggleButton" value='X'>X</ToggleButton>
                            </ToggleButtonGroup>
                            <div className="postContentContainer">

                            </div>
                        </div>

                    </div>
                </div>
                <div className="SendUsAMessageContainer">
                    <SendUsAMessageButtonComponent/>
                </div>
            </div>
        </Container>
    )
}
