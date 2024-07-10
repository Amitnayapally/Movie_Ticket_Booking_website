import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import Booking from "./components/Booking";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./app.css";

const App = () => {
    const location = useLocation();
    const hideHeaderFooter = ["/", "/registration"].includes(location.pathname);

    return (
        <div className="app">
            {!hideHeaderFooter && <Header />}
            <Routes basename="/Movie_Ticket_Booking_website">
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/home" element={<Home />} />
                <Route path="/moviedetail/:id" element={<MovieDetail />} />
                <Route path="/booking/:id" element={<Booking />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
            {!hideHeaderFooter && <Footer />}
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
