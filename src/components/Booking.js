import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/booking.css";
import { movies } from "./Home";

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const movie = movies.find((m) => m.id === parseInt(id));
    const seatPrice = movie.price;

    const seats = Array.from({ length: 70 }, (_, index) => index + 1);

    const handleSelectSeat = (seat) => {
        setSelectedSeats((prevSeats) =>
            prevSeats.includes(seat)
                ? prevSeats.filter((s) => s !== seat)
                : [...prevSeats, seat]
        );
    };

    const handleCheckout = () => {
        if (selectedSeats.length === 0) {
            alert("Please select at least one seat.");
        } else {
            navigate(`/payment`, { state: { selectedSeats, movie } });
        }
    };

    const totalPrice = selectedSeats.length * seatPrice;

    return (
        <div className="container">
            <h2>Booking for Movie {movie.title}</h2>
            <div className="seats">
                {seats.map((seat) => (
                    <button
                        key={seat}
                        onClick={() => handleSelectSeat(seat)}
                        className={selectedSeats.includes(seat) ? "selected" : ""}
                    >
                        {seat}
                    </button>
                ))}
            </div>
            <h3>Total Price: ₹{totalPrice}</h3>
            <button onClick={handleCheckout}>Goto Checkout & Payment </button>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/><br/>
        </div> 
    );
};

export default Booking;
