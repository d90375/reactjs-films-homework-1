import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieDetailsInfo.scss';

const MovieDetailsInfo = ({ info: { title, genres, duration } }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{ title }</h2>
    <div className={styles.about}>
      <ul className={styles.genres}>{genres}</ul>
      <span className={styles.duration}>{duration}</span>
    </div>
  </div>
);

MovieDetailsInfo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    genres: PropTypes.string,
    duration: PropTypes.string,
  }).isRequired,
};

export default MovieDetailsInfo;
