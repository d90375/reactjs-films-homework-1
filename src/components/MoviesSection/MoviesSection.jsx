import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './components/MovieList';
import ModalWindow from './components/ModalWindow/ModalWindow';
import Spinner from '../Spinner';

import styles from './MoviesSection.scss';


class MoviesSection extends Component {
  async componentDidMount() {
    const { fetchGenres } = this.props;
    await fetchGenres();
    const { condition, genres, fetchMovies } = this.props;
    fetchMovies(condition, genres);
  }

  render() {
    const {
      error, pending, isModalWindow, movie, removeMovieInfo, moviePending, movieError,
    } = this.props;

    if (error) {
      return (
        <div className={styles.container}>{`Error! ${error.message}`}</div>
      );
    }

    if (pending) {
      return (
        <div className={styles.container}>
          <Spinner />
        </div>
      );
    }

    return (
      <section className={styles.container}>
        {isModalWindow ? (
          <ModalWindow
            movie={movie}
            removeMovieInfo={removeMovieInfo}
            moviePending={moviePending}
            movieError={movieError}
          />
        )
          : null }
        <MovieList />
      </section>
    );
  }
}

MoviesSection.propTypes = {
  error: PropTypes.oneOf([null, Object]).isRequired,
  pending: PropTypes.bool.isRequired,
  genres: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  fetchGenres: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  removeMovieInfo: PropTypes.func.isRequired,
  movie: PropTypes.oneOf([null, Object]).isRequired,
  movieError: PropTypes.oneOf([null, Object]).isRequired,
  moviePending: PropTypes.bool.isRequired,
  isModalWindow: PropTypes.bool.isRequired,
};

export default MoviesSection;
