import React from 'react';
import Button from '@mui/material/Button';
import './SearchBarStyle.css';

const SearchBarComponent: React.FC = () => {
    const [text, setText] = React.useState('');
    return (
        <input
            className='searchBar'
            type="text"
            placeholder="Search Word"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    );
};

export default SearchBarComponent;
