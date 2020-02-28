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
      error, pending, isModalWindow, trailer, removeTrailerInfo, trailerPending, trailerError,
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
            trailer={trailer}
            removeTrailerInfo={removeTrailerInfo}
            trailerPending={trailerPending}
            trailerError={trailerError}
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
  removeTrailerInfo: PropTypes.func.isRequired,
  trailer: PropTypes.oneOf([null, Object]).isRequired,
  trailerError: PropTypes.oneOf([null, Object]).isRequired,
  trailerPending: PropTypes.bool.isRequired,
  isModalWindow: PropTypes.bool.isRequired,
};

export default MoviesSection;
