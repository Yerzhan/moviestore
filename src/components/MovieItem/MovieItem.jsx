import React from 'react';
import style from './MovieItem.module.scss';

const MovieItem = ({ movie }) => {
  console.log(movie);
  const { backdrop_path, title, vote_average, overview } = movie;
  return (
    <div className={style.MovieItem} style={{ backgroundImage: 'url(http://image.tmdb.org/t/p/original' + backdrop_path + ')' }} >
      <div className={style.overlay}>
        <div className={style.title}>{title}</div>
        <div className={style.rating}>{vote_average} / 10</div>
        <div className={style.plot}>{overview}</div>
      </div>
    </div>
  );
}

export default MovieItem;