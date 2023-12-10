// LoginPage.tsx
import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import './Login.css';
import {Button} from "@mui/material";
import SendUsAMessageButtonComponent from "../SendUsAMessageButton/SendUsAMessageButton";
import axios from "axios";

const LoginPage: React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        const userData = {
            username,
            password,

        };

        axios.post('/log-in', userData)
            .then((response) => {
                console.log('Login successful');
                setUsername('');
                setPassword('');
                <Navigate to={"/"} replace={true} />
            })
            .catch((error) => {
                console.error('Error log in user:', error);
            });
    };


    return (
        <div className="login-container">
            <div className="top-bar">
                <div className="left-section">Wi-fi</div>
                    <Button style={{
                        textTransform: 'none',
                        color: '#f7fefe',
                        right: '3%',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px'
                    }}>
                        Log in
                    </Button>

            </div>
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>

                <div className= "register">
                    You don't have an account?
                    <Link to="/register" > Register now </Link>
                </div>
            </div>
            <SendUsAMessageButtonComponent/>
        </div>
    );
};

export default LoginPage;
