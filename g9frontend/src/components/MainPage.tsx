import React from "react";

import {
    Container, TextField, Button, ToggleButtonGroup, ToggleButton,
} from "@mui/material";
import {Link} from "react-router-dom";
import "./style.css"
import SearchBar from "./SearchBar";
import SearchBarComponent from "./SearchBar";


export const MainPage: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'white',
        padding: '16px 32px',
    };

    const headerStyle: React.CSSProperties = {
        padding: '20px',
        backgroundColor: 'blueviolet',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px',
        // marginLeft: '8px',
        color:"white",

    };

    const rightContainerStyle1: React.CSSProperties = {
        display: 'flex',
        gap: '8px',
        alignItems:'flex-end',
        alignContent:'flex-end',
        alignSelf:'flex-end'
    };

    const rightContainerStyle: React.CSSProperties = {
        // backgroundColor: 'pink',
        display: 'flex',
        flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-around',

    };

    const contentStyle: React.CSSProperties = {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        height: '100%',
    };

    const leftContainerStyle: React.CSSProperties = {
        backgroundColor: 'orange',
        marginRight: '8px',
        width: '33%',
        whiteSpace: 'pre-line'
    };

    const rightContentStyle: React.CSSProperties = {
        backgroundColor: 'pink',
        display: 'flex',
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    };

    const semicircleStyle: React.CSSProperties = {
        width: '400px',
        height: '130px',
        backgroundColor: 'orange',
        position: 'absolute',
        top: '0',
        borderRadius: '0 0 250px 250px',

        display: 'flex',
        justifyContent: 'center',  // Center horizontally
        alignItems: 'center',      // Center vertically
        textAlign: 'center',       // Center text horizontally within the container
        lineHeight: '130px',


    };

    const squareInstagram: React.CSSProperties = {
        width: '300px',
        height: '600px',
        marginTop: '150px',
        backgroundColor: 'violet',
        marginBottom: '8px',
        color:'white',
        whiteSpace: 'pre-line'
    };

    const squareFacebook: React.CSSProperties = {
        width: '300px',
        height: '600px',
        marginTop: '150px',
        backgroundColor: 'blue',
        marginBottom: '8px',
        color:'white',
    };

    const squareX: React.CSSProperties = {
        width: '300px',
        height: '600px',
        marginTop: '150px',
        backgroundColor: 'black',
        marginBottom: '8px',
        color:'white',
    };

    const footerStyle: React.CSSProperties = {
        backgroundColor: 'green',
        marginTop: '8px',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        color:'white',
    };



    return(
        <Container>
            <div style={containerStyle} className="root-container">
                <h1 style={headerStyle} className="header">
                    <div style={rightContainerStyle1} className="right-container">
                        <Button style={{alignItems:"flex-end", color:"black", borderColor:"black"}}>
                            YOUR PROFILE

                        </Button>
                    </div>
                </h1>
                <div style={contentStyle} className="content">
                    <div style={leftContainerStyle} className="left-container-statistics">

                    </div>
                    <div style={rightContainerStyle} className="right-container-searched-apps">
                        <div>
                            {/*<TextField style={{marginLeft:"8px"}}*/}               {/* <- this is how the searchbar was hardcoded*/}
                            {/*    id="searchbar"*/}
                            {/*    label="Search a word"*/}
                            {/*    variant="outlined"*/}
                            {/*/>*/}
                            <SearchBarComponent/>                                     {/* <- this is how it is now, called from the file*/}

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
                <footer style={footerStyle} className="footer">

                    <div style={rightContainerStyle} className="right-container">
                        <Button style={{color:"white"}}>SEND US A MESSAGE</Button>

                    </div>
                </footer>
            </div>
        </Container>
    )

}
