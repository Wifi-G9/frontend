import React, {ChangeEvent, useState, useCallback} from 'react';
import axios from 'axios'
import Button from '@mui/material/Button';
import './SearchBarStyle.css';
interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
    wordOfTheDay: string;
}

const SearchBarComponent: React.FC<SearchBarProps> = ({wordOfTheDay, onSearch}) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
        };

    const sendWord = useCallback(async (query: string) => {
        try {
            let apiUrl = `127.0.0.1:8000/search?query=${query}`;
            axios.get(apiUrl).then(() => {
            }).catch((error) => {
                console.error('Axios error when fetching data from backend for interest-over-time:', error);
            });
        } catch (e) {
            console.error('Error fetching data from backend:', e);
        }
    }, []);

    const handleSearch = () => {
            onSearch(searchTerm);
            sendWord(searchTerm);  // Send searched word to backend for statistics
        };

    return (
        <div className='searchContainer'>
            <input
                className='searchBar'
                type="text"
                placeholder={wordOfTheDay}
                value={searchTerm}
                onChange={handleInputChange}/>
            <Button className='searchBtn' onClick={handleSearch}>
                Search
            </Button>
        </div>
    );
};

export default SearchBarComponent;


