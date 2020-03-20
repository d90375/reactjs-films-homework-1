import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MovieList from '../../components/MovieList';
import Modal from '../../components/Modal';
import Spinner from '../../components/Spinner';
import FilterTabs from '../../components/FilterTabs';

import styles from './MoviesSection.scss';

class MoviesSection extends Component {
  async componentDidMount() {
    const { location: { search } } = this.props;
    const params = new URLSearchParams(search);
    const filter = params.get('filter');
    const genreId = params.get('genreId');
    const query = params.get('search');
    const { fetchMovies, setMoviesCondition } = this.props;

    if (filter || genreId) {
      await setMoviesCondition(filter || genreId);
    }

    if (query) {
      await setMoviesCondition('Search');
    }

    const { condition } = this.props;
    fetchMovies(condition, query);
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
      trailerIsLoading, trailerError, genres, condition, movies,
      fetchTrailer, removeDetailsInfo, setMoviesCondition,
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
        <MovieList
          movies={movies}
          fetchTrailer={fetchTrailer}
          removeDetailsInfo={removeDetailsInfo}
          setMoviesCondition={setMoviesCondition}
        />
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
  removeDetailsInfo: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string,
      genreId: PropTypes.string,
      query: PropTypes.string,
    }),
  }),
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

MoviesSection.defaultProps = {
  error: null,
  trailer: null,
  trailerError: null,
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: undefined,
      genreId: undefined,
      query: undefined,
    }),
  }),
  location: PropTypes.shape({
    search: null,
  }),
};

export default withRouter(MoviesSection);
