import React from 'react';
import MovieCard from './MovieCard';

const Cart = ({ likedMovies }) => {
  return (
    <div className="app">
      <h1>Your Liked Movies</h1>
      {likedMovies.length > 0 ? (
        <div className="container">
          {likedMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No liked movies</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
