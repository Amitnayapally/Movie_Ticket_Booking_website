import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/moviedetail.css";
import { movies } from "./Home";

const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find((m) => m.id === parseInt(id));

    return (
        <div className="container">
            <div className="movie-detail">
                <img src={movie.image} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>Price per ticket: ₹{movie.price}</p>
                <button onClick={() => navigate(`/booking/${movie.id}`)}>Proceed to Booking</button>
            </div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default MovieDetail;
