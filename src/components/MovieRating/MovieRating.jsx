import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieRating.scss';

const MovieRating = ({ rating }) => {
  const stars = Array.from(Array(5), (star, index) => {
    if (Math.round(rating / 2 - (index + 1)) >= 0) {
      return <span className={styles.star} key={index}>&#9733;</span>;
    }

    return <span className={styles.star} key={index}>&#9734;</span>;
  });

  return (
    <div className={styles.container}>
      { stars }
      <span className={styles.rating}>{rating}</span>
    </div>
  );
};

MovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default MovieRating;
