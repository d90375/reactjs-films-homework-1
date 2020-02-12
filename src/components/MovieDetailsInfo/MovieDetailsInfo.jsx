import React from 'react';
import PropTypes from 'prop-types';

import styles from './movieDetailsInfo.scss';

const MovieDetailsInfo = ({ title, genres, duration }) => (
  <div className={styles.movieDetailsInfo}>
    <h2 className={styles.title}>{ title }</h2>
    <p className={styles.genres}>{ genres }</p>
    <span className={styles.duration}>{ duration }</span>
  </div>
);

MovieDetailsInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default MovieDetailsInfo;
