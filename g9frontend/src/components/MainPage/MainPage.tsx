import React from "react";

import {
    Container, TextField, Button, ToggleButtonGroup, ToggleButton,
} from "@mui/material";
import {Link} from "react-router-dom";
import "./MainPageStyle.css"
import SearchBar from "../SearchBar/SearchBar";
import SearchBarComponent from "../SearchBar/SearchBar";


export const MainPage: React.FC = () => {

    return(
        <Container>
            <div className="container">
                <h1 className="header">
                    <div className="rightContainer1">
                        <Button style={{alignItems:"flex-end", color:"black", borderColor:"black"}}>
                            YOUR PROFILE

                        </Button>
                    </div>
                </h1>
                <div className="content">
                    <div className="leftContainer">
                        {/*here will be the graph part*/}
                    </div>
                    <div className="rightContainer">
                        <div>
                            {/*<TextField style={{marginLeft:"8px"}}*/}
                            {/*    id="searchbar"*/}
                            {/*    label="Search a word"*/}
                            {/*    variant="outlined"*/}
                            {/*/>*/}
                            <SearchBarComponent/>

                            <Button type="submit" style={{alignItems:"flex", color:"black", borderColor:"black"}}>
                                SEARCH
                            </Button>
                        </div>
                        <div>
                            <ToggleButtonGroup style={{backgroundColor:"white"}}
                                color="primary"
                                exclusive
                                //onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton value="instagram">instagram</ToggleButton>
                                <ToggleButton value="facebook">facebook</ToggleButton>
                                <ToggleButton value="X">X</ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                    </div>
                </div>
                <footer className="footer">

                    <div className="right-container">
                        <Button style={{color:"white"}}>SEND US A MESSAGE</Button>

                    </div>
                </footer>
            </div>
        </Container>
    )

}
