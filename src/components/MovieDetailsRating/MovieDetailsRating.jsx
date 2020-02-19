import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieDetailsRating.scss';

const MovieDetailsRating = ({ rating }) => {
  let id = 0;
  let stars = new Array(5).fill('');
  stars = stars.map((star, index) => {
    id += 1;

    if (rating - (index + 1) >= -0.5) {
      return <span className={styles.blueStar} key={id}>&#9733;</span>;
    }

    return <span className={styles.blueStar} key={id}>&#9734;</span>;
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
