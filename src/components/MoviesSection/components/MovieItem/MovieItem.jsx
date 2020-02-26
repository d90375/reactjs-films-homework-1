import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieItem.scss';

const MovieItem = ({
  film: {
    poster, title, genres, rating,
  },
}) => (
  <div className={styles.container}>
    <img className={styles.poster} src={poster} alt="poster" />
    <div className={styles.info}>
      <h3 className={styles.title}>
        {title.length < 18 ? title : `${title.substring(0, 15)}...`}
      </h3>
      <p className={styles.rating}>{rating}</p>
      <p className={styles.genres}>{genres}</p>
    </div>
  </div>
);

MovieItem.propTypes = {
  film: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieItem;
