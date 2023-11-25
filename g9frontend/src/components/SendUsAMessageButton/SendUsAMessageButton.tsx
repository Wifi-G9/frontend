import React, {useState} from 'react';
import './SendUsAMessageButtonStyle.css';
import MessageIcon from '@mui/icons-material/Message';

const SendUsAMessageButtonComponent: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageText, setMessageText] = useState("");

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeAndSendMessage = () => {
        // Send a POST request to the /developer-message endpoint with the custom message
        fetch('/developer-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: messageText}),
        }).then(r => {
            console.log(r)
        });

        // Close the modal
        setIsModalOpen(false);
    };

    return (
        <div>
            <button className='sendUsAMessageButton' onClick={openModal}>
                <MessageIcon/>
            </button>

            <div className={`modal-overlay ${isModalOpen ? 'modal-open' : ''}`}>
                <div className={`modal-content ${isModalOpen ? 'modal-content-open' : ''}`}>
                    <textarea
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Type your message here..."
                        className='textarea-input'
                    />
                    <button onClick={closeAndSendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default SendUsAMessageButtonComponent;
