import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieInfo.scss';

const MovieInfo = ({ info: { title, genres, duration } }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{ title }</h2>
    <div className={styles.about}>
      <ul className={styles.genres}>{genres}</ul>
      <span className={styles.duration}>{duration}</span>
    </div>
  </div>
);

MovieInfo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    genres: PropTypes.string,
    duration: PropTypes.string,
  }).isRequired,
};

export default MovieInfo;
