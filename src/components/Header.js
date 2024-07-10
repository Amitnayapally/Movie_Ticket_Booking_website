import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <header className="header" align="center">
            <h1>Welcome to Amit's Movie Ticket Booking Application</h1>
            <div className="header-buttons">
                <button onClick={() => alert("Profile page not implemented yet")}>Profile</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </header>
    );
};

export default Header;
