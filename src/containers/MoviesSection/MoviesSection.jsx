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
    const {
      fetchMovies, setMoviesCondition,
    } = this.props;

    if (filter || genreId) {
      await setMoviesCondition(filter || genreId);
    }

    if (query) {
      await setMoviesCondition('Search');
    }

    const { condition } = this.props;
    fetchMovies(condition, query);
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search }, condition, fetchMoviesDebounced,
    } = this.props;
    if (search !== prevProps.location.search) {
      const params = new URLSearchParams(search);
      const filter = params.get('filter');
      const genreId = params.get('genreId');
      const query = params.get('search');

      if (filter) {
        this.fetchByFilter(filter);
      }

      if (genreId) {
        this.fetchByFilter(genreId);
      }

      if (query) {
        fetchMoviesDebounced(condition, query);
      }
    }
  }

  fetchByFilter = async (filter) => {
    const {
      setMoviesCondition, genres, fetchMovies,
    } = this.props;
    fetchMovies(filter, genres);
    await setMoviesCondition(filter);
  };

  render() {
    const {
      error, isLoading, isModalOpened, trailer, removeTrailerInfo,
      trailerIsLoading, trailerError, genres, condition, movies,
      fetchTrailer, removeDetailsInfo, setMoviesCondition, history,
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
            condition={condition}
            onFilterChange={history.push}
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
          condition={condition}
          onFilterChange={history.push}
        />
        <MovieList
          movies={movies}
          fetchTrailer={fetchTrailer}
          removeDetailsInfo={removeDetailsInfo}
          setMoviesCondition={setMoviesCondition}
          onClick={history.push}
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
  fetchMoviesDebounced: PropTypes.func.isRequired,
  removeTrailerInfo: PropTypes.func.isRequired,
  trailer: PropTypes.shape({}),
  trailerError: PropTypes.shape({}),
  trailerIsLoading: PropTypes.bool.isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  setMoviesCondition: PropTypes.func.isRequired,
  removeDetailsInfo: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MoviesSection.defaultProps = {
  error: null,
  trailer: null,
  trailerError: null,
  location: PropTypes.shape({
    search: null,
  }),
};

export default withRouter(MoviesSection);
export { MoviesSection };
