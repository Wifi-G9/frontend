import React from "react";

import {
    Container, TextField, Button, ToggleButtonGroup, ToggleButton, IconButton,
} from "@mui/material";
import {Link} from "react-router-dom";
import "./MainPageStyle.css"
import SearchBarComponent from "../SearchBar/SearchBar";
import { CenterFocusStrong } from "@mui/icons-material";
import MessageIcon from '@mui/icons-material/Message';

import ToggleButton from './ToggleButton.js'
import {useState} from "react";
import './ToggleButton.css';
import useFetchPosts from "./GetInsta";

export const MainPage: React.FC = () => {
    const [selectedPlatform, setSelectedPlatform]=  useState();
    const posts = useFetchPosts(theWord, selectedPlatform);

    function handleSelect(selectedButton){
        //selectedButton => 'instagram' , 'facebook' , 'x'
        setSelectedPlatform(selectedButton);
    }
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
                          <ToggleButton className="toggleButton" value='instagram' isSelected = {selectedPlatform === "instagram"} onSelect={()=> handleSelect("instagram")}>Instagram</ToggleButton>
                          <ToggleButton className="toggleButton" value='facebook' isSelected = {selectedPlatform === "facebook"} onSelect={()=> handleSelect("facebook")}>Facebook</ToggleButton>
                          <ToggleButton className="toggleButton" value='X' isSelected = {selectedPlatform === "x"} onSelect={()=> handleSelect("x")}>X</ToggleButton>
                        <div className="postContentContainer">
                              {!selectedPlatform && <p>Word of the day </p>}
                              {selectedPlatform  &&
                                  (posts.map((post) => (
                                      <div key={post.link}>
                                          <p>Description: {post.description}</p>
                                          <p>Likes: {post.likes}</p>
                                          <p>Comments: {post.comments}</p>
                                          <p>Link: <a href={post.link} target="_blank" rel="noopener noreferrer">{post.link}</a></p>
                                          <p>Hashtags: {post.hashtags.join(', ')}</p>
                                          <p>Engagement Score: {post.engagement_score}</p>
                                          <p>Sentiment: {post.sentiment_analysis.sentiment}</p>
                                          <p>Score: {post.sentiment_analysis.score}</p>
                                          <p>Image Description: {post.image_description}</p>
                                      </div>
                                  )))  
                              }
    
                        </div>
                      </div>   
                    </div>
                </div>
                <IconButton style={{color:"black", borderRadius: '50%', position: 'fixed', bottom: '20px', right: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}}>
                    <MessageIcon />
                </IconButton>
            </div>
        </Container>
    )
}
