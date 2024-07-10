import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/home");
    };

    return (
        <div className="container">
            <header><h1>Login To Ticket Booking Application</h1></header>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="abc@gmail.com" required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="register-link">
                New user? <span onClick={() => navigate("/registration")}>Register now</span>
            </div>
        </div>
    );
};

export default Login;
