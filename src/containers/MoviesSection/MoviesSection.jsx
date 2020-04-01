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
      fetchMovies, setMoviesCondition, setSearchQuery, deleteSearchQuery,
    } = this.props;

    if (filter || genreId) {
      deleteSearchQuery();
      await setMoviesCondition(filter || genreId);
    }

    if (query) {
      setSearchQuery(query);
      await setMoviesCondition('Search');
    }

    const { condition } = this.props;
    fetchMovies(condition, query);
  }

  componentDidUpdate(prevProps) {
    const { location: { search } } = this.props;
    if (search !== prevProps.location.search) {
      const params = new URLSearchParams(search);
      const filter = params.get('filter');
      const genreId = params.get('genreId');

      if (filter) {
        this.fetchByFilter(filter);
      }

      if (genreId) {
        this.fetchByFilter(genreId);
      }
    }
  }

  fetchByFilter = async (filter) => {
    const { setMoviesCondition, deleteSearchQuery } = this.props;
    deleteSearchQuery();
    await setMoviesCondition(filter);
    const { condition, genres, fetchMovies } = this.props;
    fetchMovies(condition, genres);
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
          historyPush={history.push}
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
  setSearchQuery: PropTypes.func.isRequired,
  deleteSearchQuery: PropTypes.func.isRequired,
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
