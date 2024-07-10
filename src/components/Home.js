import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";
import movie5 from "../assets/movie5.jpg";

const movies = [
    { id: 1, title: "Marvel Avengers: Endgame", description: "Earth's mightiest heroes unite to reverse Thanos' devastating snap and restore balance to the universe.", image: movie1, price: 1200 },
    { id: 2, title: "Oppenheimer", description: "A biographical drama about J. Robert Oppenheimer, the brilliant physicist who led the development of the atomic bomb.", image: movie2, price: 1000 },
    { id: 3, title: "Joker", description: " A dark, psychological exploration of Arthur Fleck's descent into madness and his transformation into the iconic Batman villain.", image: movie3, price: 1500 },
    { id: 4, title: "Blade Runner 2049", description: "A visually stunning neo-noir sci-fi sequel where a new blade runner unearths long-buried secrets that could plunge society into chaos.", image: movie4, price: 800 },
    { id: 5, title: "Lagaan", description: "Set in colonial India, villagers, led by a determined young man, take on their British oppressors in a high-stakes cricket match to abolish an unfair tax.", image: movie5, price: 1100 }
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2>Available Movies</h2>
            {movies.map((movie) => (
                <div key={movie.id} className="movie">
                    <img src={movie.image} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                    <p>Price per ticket: ₹{movie.price}</p>
                    <button onClick={() => navigate(`/moviedetail/${movie.id}`)}>Book Now</button>
                </div>
            ))}
        </div>
    );
};

export default Home;
export { movies };
