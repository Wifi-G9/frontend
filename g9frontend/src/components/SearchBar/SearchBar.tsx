// ButtonComponent.tsx
import React from 'react';
import Button from '@mui/material/Button';

const SearchBarComponent: React.FC = () => {
    const [text, setText] = React.useState('');
    return (
        <input
                    type="text"
                    placeholder="Search Word"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
            />
    );
};

export default SearchBarComponent;
