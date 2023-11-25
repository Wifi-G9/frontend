import React, { useState } from "react";
import {
    Container,
    Button,
    ToggleButtonGroup,
    IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./MainPageStyle.css";
import SearchBarComponent from "../SearchBar/SearchBar";
import ToggleButton  from "../ToggleButton/ToggleButton";
import useFetchPosts from "../GetInsta/GetInsta";
import MessageIcon from '@mui/icons-material/Message';
import SendUsAMessageButtonComponent from "../SendUsAMessageButton/SendUsAMessageButton";


interface Post {
    link: string;
    description: string;
    likes: number;
    comments: number;
    hashtags: string[];
    engagement_score: number;
    sentiment_analysis: {
        sentiment: string;
        score: number;
    };
    image_description: string;
}

export const MainPage: React.FC = () =>  {
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
    const [theWord, setSearchTerm] = useState<string | null>(null);
    const posts: Post[] = useFetchPosts(theWord, selectedPlatform);

    function handleSelect(selectedButton: string) {
        setSelectedPlatform(selectedButton);
    }

    return (
        <Container>
            <div className="container">
                <div className="header">
                    <p className="logo">WiFi</p>
                    <Button style={{ textTransform: 'none', color: '#f7fefe', right: '3%', fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
                        Log in
                    </Button>
                </div>
                <div className="content">
                    <div className="leftContainer">
                        {/* Here will be the graph part */}
                    </div>
                    <div className="rightContainer">
                        <div className="searchBarContainer">
                            <SearchBarComponent />
                        </div>
                        <div className="toggleGroupContainer">
                            <ToggleButtonGroup style={{ backgroundColor: '#e9e9e9', fontFamily: 'Inter, sans-serif', width: '100%' }}
                                               color="primary"
                                               exclusive
                                               aria-label="Platform"
                            >
                                <ToggleButton className="toggleButton" value='instagram' isSelected={selectedPlatform === "instagram"} onSelect={() => handleSelect("instagram")}>Instagram</ToggleButton>
                                <ToggleButton className="toggleButton" value='facebook' isSelected={selectedPlatform === "facebook"} onSelect={() => handleSelect("facebook")}>Facebook</ToggleButton>
                                <ToggleButton className="toggleButton" value='X' isSelected={selectedPlatform === "x"} onSelect={() => handleSelect("x")}>X</ToggleButton>
                            </ToggleButtonGroup>
                            <div className="postContentContainer">
                                {!selectedPlatform && <p>Word of the day </p>}
                                {(selectedPlatform && posts) &&
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
                <SendUsAMessageButtonComponent/>
            </div>
        </Container>
    )
}
