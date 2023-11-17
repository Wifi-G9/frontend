import React, {ChangeEvent, useState} from 'react';
import Button from '@mui/material/Button';
import './SearchBarStyle.css';
interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBarComponent: React.FC<SearchBarProps> = ({onSearch}) => {


    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
        };

    const handleSearch = () => {
            onSearch(searchTerm);
        };

    return (
        <><input
            className='searchBar'
            type="text"
            placeholder="Search Word"
            value={searchTerm}
            onChange={handleInputChange}/>
        <Button onClick={handleSearch}>
            Search
        </Button></>
    );
};

export default SearchBarComponent;


