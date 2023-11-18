import React, { ReactNode } from 'react';
import "./SendUsAMessageButtonStyle.css";
import MessageIcon from '@mui/icons-material/Message';



const SendUsAMessageButtonComponent: React.FC = () => {
    const clickMe = () => {
        const messageText = "This app is really cool.";

        // Send a POST request to the /developer-message endpoint
        fetch('/developer-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: messageText }),
        })
    };

    return (
        <button className='sendUsAMessageButton' onClick={clickMe} style={{  position: 'fixed', bottom: '20px', right: '20px' }}>
            <MessageIcon />
        </button>
    );
};

export default SendUsAMessageButtonComponent;
