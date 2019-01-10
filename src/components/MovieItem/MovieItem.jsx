import React from 'react';
import style from './MovieItem.module.scss';
import config from '../../config/imageConfig.json';

const MovieItem = ({ movie }) => {
  const { backdrop_path, title, vote_average, overview } = movie;
  return (
    <div className={style.MovieItem} style={{ backgroundImage: `url(${config.images.secure_base_url}/${config.images.backdrop_size_s}${backdrop_path})` }} >
      <div className={style.overlay}>
        <div className={style.title}>{title}</div>
        <div className={style.rating}>{vote_average} / 10</div>
        <div className={style.plot}>{overview}</div>
      </div>
    </div>
  );
}

export default MovieItem;