import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieDetailsRating.scss';

const MovieDetailsRating = ({ rating }) => {
  let id = 0;

  const stars = Array.from(Array(5), (star, index) => {
    id += 1;

    if (Math.round(rating - (index + 1)) >= 0) {
      return <span className={styles.star} key={id}>&#9733;</span>;
    }

    return <span className={styles.star} key={id}>&#9734;</span>;
  });

  return (
    <div className={styles.container}>
      { stars }
      <span className={styles.rating}>{rating}</span>
    </div>
  );
};

MovieDetailsRating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default MovieDetailsRating;
