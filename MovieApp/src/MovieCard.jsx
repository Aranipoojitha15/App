import React from 'react';

const MovieCard = ({ movie, onLike }) => {
  const { imdbID, Year, Poster, Title, Type } = movie;

  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        <button onClick={() => onLike(movie)}>Like</button>
      </div>
    </div>
  );
}

export default MovieCard;
