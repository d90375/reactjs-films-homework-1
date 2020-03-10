import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from '../../components/MovieList';
import Modal from '../../components/Modal';
import Spinner from '../../components/Spinner';
import FilterTabs from '../../components/FilterTabs';

import styles from './MoviesSection.scss';

class MoviesSection extends Component {
  componentDidMount() {
    const { condition, fetchMovies } = this.props;
    fetchMovies(condition);
  }

  fetchByFilter = async (filter) => {
    const { setMoviesCondition } = this.props;
    await setMoviesCondition(filter);
    const { condition, genres, fetchMovies } = this.props;
    fetchMovies(condition, genres);
  };

  render() {
    const {
      error, isLoading, isModalOpened, trailer, removeTrailerInfo,
      trailerIsLoading, trailerError, genres, condition, movies, fetchTrailer,
    } = this.props;

    if (error) {
      return (
        <div className={styles.container}>{`Error! ${error.message}`}</div>
      );
    }

    if (isLoading) {
      return (
        <div className={styles.container}>
          <FilterTabs
            name="Tabs"
            genres={genres}
            fetchByFilter={this.fetchByFilter}
            condition={condition}
          />
          <Spinner />
        </div>
      );
    }

    return (
      <section className={styles.container}>
        {isModalOpened ? (
          <Modal
            trailer={trailer}
            removeTrailerInfo={removeTrailerInfo}
            trailerIsLoading={trailerIsLoading}
            trailerError={trailerError}
          />
        )
          : null }
        <FilterTabs
          name="Tabs"
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
  isLoading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  condition: PropTypes.string.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  removeTrailerInfo: PropTypes.func.isRequired,
  trailer: PropTypes.shape({}),
  trailerError: PropTypes.shape({}),
  trailerIsLoading: PropTypes.bool.isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  setMoviesCondition: PropTypes.func.isRequired,
};

MoviesSection.defaultProps = {
  error: null,
  trailer: null,
  trailerError: null,
};

export default MoviesSection;
