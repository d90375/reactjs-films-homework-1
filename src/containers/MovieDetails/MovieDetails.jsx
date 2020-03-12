import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import MovieInfo from '../../components/MovieInfo';
import MovieRating from '../../components/MovieRating';
import MovieAction from '../../components/MovieAction';
import Spinner from '../../components/Spinner';

import styles from './MovieDetails.scss';

const MovieDetails = ({
  details, error, isLoading, fetchDetails,
}) => {
  const { id } = useParams();

  if (!details && !isLoading) {
    fetchDetails(id);
  }

  if (error) {
    return (
      <section className={styles.container}>{`Error! ${error.message}`}</section>
    );
  }

  if (details) {
    const {
      background, rating, overview, ...info
    } = details;

    const style = { backgroundImage: `url(${background})` };
    return (
      <section className={styles.container} style={style}>
        <div className={styles.info}>
          <MovieInfo info={info} />
          <MovieRating rating={rating} />
        </div>
        <MovieAction description={overview} />
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <Spinner />
    </section>
  );
};

MovieDetails.propTypes = {
  fetchDetails: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    background: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};

MovieDetails.defaultProps = {
  details: null,
  error: null,
};

export default MovieDetails;
