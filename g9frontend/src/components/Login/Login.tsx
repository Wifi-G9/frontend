// LoginPage.tsx
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Login.css';
import {Button} from "@mui/material";
import SendUsAMessageButtonComponent from "../SendUsAMessageButton/SendUsAMessageButton";
import {setCookie} from "../CookieManager/CookieManager";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then(async (response) => {
            if (response.ok) {
                console.log('Login successful');
                const responseJson = await response.json();
                console.log(responseJson)

                setCookie("wifiapp-username", responseJson.username, 7);
                setCookie("wifiapp-email", responseJson.email, 7);
            } else {
                console.log('Login failed');
                console.log(await response.json())
            }

            navigate("/");
        }).catch((error) => {
            console.error('Error log in user:', error);
        });
    };


    return (
        <div className="login-container">
            <div className="top-bar">
                <div className="left-section">WiFi</div>
                <Button component={Link} to="/" style={{
                    textTransform: 'none',
                    color: '#f7fefe',
                    right: '3%',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px'
                }}>
                    Main Page
                </Button>

            </div>
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}>
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
                    <button type="submit">Login</button>
                </form>

                <div className="register">
                    You don't have an account?
                    <Link to="/register"> Register now </Link>
                </div>
            </div>
            <SendUsAMessageButtonComponent/>
        </div>
    );
};

export default LoginPage;
