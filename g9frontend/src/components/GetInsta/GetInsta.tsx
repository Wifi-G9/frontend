import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchPosts = (theWord, selectedPlatform) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let apiUrl = '';
        if (selectedPlatform === 'instagram') {
            apiUrl = `/search-instagram?query=${theWord}`;
        } else if (selectedPlatform === 'facebook') {
            //apiUrl = `/search-facebook?query=${theWord}`;
        }
        else {

        }
        axios
            .get(apiUrl)
            .then((response) => {
                setPosts(response.data['posts-list']);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });

    }, [theWord, selectedPlatform]);

    return posts;
};

export default useFetchPosts;
