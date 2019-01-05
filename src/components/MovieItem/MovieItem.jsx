import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieItem;