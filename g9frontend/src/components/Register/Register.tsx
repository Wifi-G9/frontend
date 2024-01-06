// RegisterPage.tsx
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Register.css';
import {Button} from "@mui/material";
import SendUsAMessageButtonComponent from "../SendUsAMessageButton/SendUsAMessageButton";
import {setCookie} from "../CookieManager/CookieManager";

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verify_password, setVerifyPassword] = useState('');

    const handleRegister = () => {
        fetch('http://127.0.0.1:8000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password,
                verify_password: verify_password,
            }),
        }).then(async (response) => {
            if (response.ok) {
                console.log('Registration successful');
                setCookie("wifiapp-username", username, 7);
                setCookie("wifiapp-email", email, 7);
            } else {
                console.error("Registration failed");
            }

            console.log(await response.json())
            navigate("/");
        }).catch((error) => {
            console.error('Error registering user:', error);
        });
    };


    return (
        <div className="register-container">
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
                <div className="go-to-login">
                    You already have an account?
                    <Link to="/login"> Login now </Link>
                </div>
            </div>
            <SendUsAMessageButtonComponent/>
        </div>
    );
};

export default RegisterPage;
