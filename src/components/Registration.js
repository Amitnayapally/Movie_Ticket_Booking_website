import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/registration.css";

const Registration = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div className="container">
            <header><h1>Registration For Movie Ticket Booking Application</h1></header>
            <h2>Registration</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="abc@gmail.com" required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter password" required />
                </div>
                <button type="submit">Register Now</button>
            </form>
        </div>
    );
};

export default Registration;
