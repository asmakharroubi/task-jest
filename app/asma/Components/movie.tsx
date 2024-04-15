import React from "react";
// import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import "./Movie.css";

interface MovieProps {
  movie: {
    img: string;
    title: string;
    // Add any other properties of the movie object here
  };
}

export const Movie: React.FC<MovieProps> = ({ movie }) => {
  // You can use useDispatch here if needed
  // const dispatch = useDispatch();

  return (
    <div className="movie-card">
      <img src={movie.img} alt={movie.title} className="movie-cover" />
      <h1 className="movie-title">{movie.title}</h1>
      {/* Add any other JSX elements or logic related to the movie */}
    </div>
  );
};

export default Movie;


