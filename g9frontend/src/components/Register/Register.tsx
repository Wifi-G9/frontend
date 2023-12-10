// RegisterPage.tsx
import React, { useState } from 'react';
import { Link,Navigate} from 'react-router-dom';
import './Register.css';
import {Button} from "@mui/material";
import SendUsAMessageButtonComponent from "../SendUsAMessageButton/SendUsAMessageButton";
import axios from "axios";

const RegisterPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');

    const handleRegister = () => {
        const userData = {
            username,
            email,
            password,
            instagram,
            facebook,
            twitter
        };

        axios.post('/sign-up', userData)
            .then((response) => {
                console.log('Registration successful');
                setUsername('');
                setEmail('');
                setPassword('');
                setInstagram('');
                setFacebook('');
                setTwitter('');

                <Navigate to={"/"} replace={true} />
            })
            .catch((error) => {
                console.error('Error registering user:', error);
            });
    };



    return (
        <div className="register-container">
            <div className="top-bar">
                <div className="left-section">Wi-Fi</div>
                <Button component={Link} to="/login"  style={{
                    textTransform: 'none',
                    color: '#f7fefe',
                    right: '3%',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px'
                }}>
                    Log in
                </Button>
            </div>
            <div className="register-form">
                <h2>Register</h2>
                <div className="input-section">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Instagram"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Facebook"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="X"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                    />
                </div>
                <button type="submit" onClick={handleRegister}>Register</button>
                <div className= "go-to-login">
                    You already have an account?
                    <Link to="/login" > Login now </Link>
                </div>
            </div>
            <SendUsAMessageButtonComponent/>
        </div>
    );
};

export default RegisterPage;
