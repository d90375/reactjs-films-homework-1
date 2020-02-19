import React from 'react';
import PropTypes from 'prop-types';
import MovieDetailsInfo from '../MovieInfo';
import MovieDetailsRating from '../MovieRating';
import MovieAction from '../MovieAction';

import styles from './MovieDetails.scss';

const MovieDetails = ({ data: { description, rating, ...info } }) => (
  <section className={styles.container}>
    <div className={styles.info}>
      <MovieDetailsInfo info={info} />
      <MovieDetailsRating rating={rating} />
    </div>
    <MovieAction description={description} />
  </section>
);

MovieDetails.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    rating: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
