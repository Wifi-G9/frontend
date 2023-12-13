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
    const [verify_password, setVerifyPassword] = useState('');

    const handleRegister = () => {

        axios.post('http://127.0.0.1:8000/signup?email=${email}&username=${username}&password=${password}&verify_password=${verify_password}')
              .then((response) => {
                console.log('Registration successful');
                setUsername('');
                setEmail('');
                setPassword('');
                setVerifyPassword('');

                <Navigate to={"/"} replace={true} />
            })
            .catch((error) => {
                console.error('Error registering user:', error);
            });
    };



    return (
        <div className="register-container">
            <div className="top-bar">
                <div className="left-section">WiFi</div>
                <Button component={Link} to="/"  style={{
                    textTransform: 'none',
                    color: '#f7fefe',
                    right: '3%',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px'
                }}>
                    Main Page
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
                        type="password"
                        placeholder="Verify-Password"
                        value={verify_password}
                        onChange={(e) => setVerifyPassword(e.target.value)}
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
