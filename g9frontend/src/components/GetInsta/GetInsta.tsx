import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react'

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

const mocPosts: Post[] = [
    {
        "link": "https://www.instagram.com/p/CWO6hY_j_rX/",
        "description": "AI is the future!",
        "sentiment_analysis": {
            "sentiment": "positive",
            "score": 0.9
        },
        "likes": 1000,
        "comments": 500,
        "hashtags": [
            "#AI",
            "#artificialintelligence",
            "#future"
        ],
        "engagement_score": 1500,
        "image_description": "A person using a computer with a futuristic interface."
    },
    {
        "link": "https://www.instagram.com/p/CWQ3456j_rX/",
        "description": "AI is changing the world.",
        "sentiment_analysis": {
            "sentiment": "positive",
            "score": 0.8
        },
        "likes": 800,
        "comments": 400,
        "hashtags": [
            "#AI",
            "#artificialintelligence",
            "#change"
        ],
        "engagement_score": 1200,
        "image_description": "A group of robots working together in a factory."
    },
    {
        "link": "https://www.instagram.com/p/CWO6789j_rX/",
        "description": "AI is amazing!",
        "sentiment_analysis": {
            "sentiment": "positive",
            "score": 1.0
        },
        "likes": 600,
        "comments": 300,
        "hashtags": [
            "#AI",
            "#artificialintelligence",
            "#amazing"
        ],
        "engagement_score": 900,
        "image_description": "A child playing with an AI-powered robot."
    }
];

const InstagramComponent: React.FC<{ query: string }> = ({query}) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const debug = true; // change this to false when you want this component to return real data

    useEffect(() => {
        if (debug) {
            setPosts(mocPosts);
        } else {
            let apiUrl = `/search-instagram?query=${query}`;

            if (apiUrl) {
                axios
                    .get(apiUrl)
                    .then((response) => {
                        setPosts(response.data['posts-list']);
                    })
                    .catch((error) => {
                        console.error('Error fetching posts:', error);
                    });
            }
        }
    }, [debug, query]);

    return (<div>
        {posts.map((post) => (
            <div key={post.link}>
                <p>Description: {post.description}</p>
                <p>Likes: {post.likes}</p>
                <p>Comments: {post.comments}</p>
                <p>Link: <a href={post.link} target="_blank"
                            rel="noopener noreferrer">{post.link}</a></p>
                <p>Hashtags: {post.hashtags.join(', ')}</p>
                <p>Engagement Score: {post.engagement_score}</p>
                <p>Sentiment: {post.sentiment_analysis.sentiment}</p>
                <p>Score: {post.sentiment_analysis.score}</p>
                <p>Image Description: {post.image_description}</p>
            </div>
        ))}
    </div>);
};

export default InstagramComponent;
