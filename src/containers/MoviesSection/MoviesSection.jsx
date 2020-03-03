import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from '../../components/MovieList';
import ModalWindow from '../../components/ModalWindow';
import Spinner from '../../components/Spinner';
import FilterTabs from '../../components/FilterTabs';

import styles from './MoviesSection.scss';

class MoviesSection extends Component {
  async componentDidMount() {
    const { fetchGenres } = this.props;
    await fetchGenres();
    const { condition, genres, fetchMovies } = this.props;
    fetchMovies(condition, genres);
  }

  fetchByFilter = async (filter) => {
    const { setMoviesCondition } = this.props;
    await setMoviesCondition(filter);
    const { condition, genres, fetchMovies } = this.props;
    fetchMovies(condition, genres);
  };

  render() {
    const {
      error, pending, isModalWindow, trailer, removeTrailerInfo,
      trailerPending, trailerError, genres, condition, movies, fetchTrailer,
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
        <FilterTabs
          genres={genres}
          fetchByFilter={this.fetchByFilter}
          condition={condition}
        />
        <MovieList movies={movies} fetchTrailer={fetchTrailer} />
      </section>
    );
  }
}

MoviesSection.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  pending: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  condition: PropTypes.string.isRequired,
  fetchGenres: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  removeTrailerInfo: PropTypes.func.isRequired,
  trailer: PropTypes.shape({}),
  trailerError: PropTypes.shape({}),
  trailerPending: PropTypes.bool.isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  isModalWindow: PropTypes.bool.isRequired,
  setMoviesCondition: PropTypes.func.isRequired,
};

MoviesSection.defaultProps = {
  error: null,
  trailer: null,
  trailerError: null,
};

export default MoviesSection;
