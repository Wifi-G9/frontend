// Description.tsx
import React from 'react';


const DescriptionWord: React.FC= () => {
    const descriptionText = "This is the description text."; // Replace with your desired text

    return (
        <div>
            <h2>Description</h2>
            <p>{descriptionText}</p>
        </div>
    );
};

export default DescriptionWord;
