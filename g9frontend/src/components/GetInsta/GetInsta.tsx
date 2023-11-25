import { useEffect, useState } from 'react';
import axios from 'axios';

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

const useFetchPosts = (theWord: string | null, selectedPlatform: string | null): Post[] => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        let apiUrl = '';
        if (selectedPlatform === 'instagram') {
            apiUrl = `/search-instagram?query=${theWord}`;
        } else if (selectedPlatform === 'facebook') {
            // apiUrl = `/search-facebook?query=${theWord}`;
        }
        else {
            // Handle other platforms or default case
        }

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

    }, [theWord, selectedPlatform]);

    return posts;
};

export default useFetchPosts;
