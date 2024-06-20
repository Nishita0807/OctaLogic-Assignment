import React, { useState } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        // Check if email and password are not empty
        if (email === 'admin123@gmail.com' && password === 'admin123') {
            // Simulate successful login
            const token = Math.random().toString(36).substr(2); // Generate a random token
            localStorage.setItem('token', token);
            alert('Login Successfully');
            navigate('/overview');
        } else {
            setErrorMessage('Login failed. Please check your credentials.');
        }
    };

    return (
       
            <div className="login-page">
                <div className="login">
                        <div className="frame-2">
                            <div className="frame-3">
                                <div className="frame-4">
                                    <div className="login-header">Login</div>
                                </div>
                                <div className="frame-5">
                                    <div className="text-wrapper-3">Email</div>
                                    <input
                                        style={{ width: '400px', padding: '20px' }}
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="text-wrapper-3">Password</div>
                                    <input
                                        style={{ width: '400px', padding: '20px' }}
                                        placeholder="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleLogin} className="login-wrapper">
                            <div className="text-wrapper-5">Login</div>
                        </button>
                    </div>
            </div>
   
    );
};

export default Login;
