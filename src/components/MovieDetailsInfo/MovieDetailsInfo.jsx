import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieDetailsInfo.scss';

const MovieDetailsInfo = ({ info }) => {
  const { title, genres, duration } = info;

  const genresList = genres.map((genre) => (
    <li className={styles.genres__item} key={genre.toString()}>{genre}</li>));

  return (
    <div className={styles.movieDetailsInfo}>
      <h2 className={styles.title}>{ title }</h2>
      <ul className={styles.genres}>{genresList}</ul>
      <span className={styles.duration}>{duration}</span>
    </div>
  );
};

MovieDetailsInfo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    genres: PropTypes.array,
    duration: PropTypes.string,
  }).isRequired,
};

export default MovieDetailsInfo;
