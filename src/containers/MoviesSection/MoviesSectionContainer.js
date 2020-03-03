import { connect } from 'react-redux';
import {
  getMoviesIsLoading, getMoviesError, getMoviesCondition, getMovies,
} from '../../modules/movies/moviesSelector';
import { getGenres } from '../../modules/genres/genresSelector';
import {
  getTrailer, getTrailerIsLoading, getTrailerError, getModalOpened,
} from '../../modules/trailer/trailerSelector';
import { fetchTrailer, removeTrailerInfo } from '../../modules/trailer/trailerAction';
import { fetchMovies, setMoviesCondition } from '../../modules/movies/moviesAction';
import { fetchGenres } from '../../modules/genres/genresAction';

import MoviesSection from './MoviesSection';

const mapStateToProps = (state) => ({
  error: getMoviesError(state),
  isLoading: getMoviesIsLoading(state),
  movies: getMovies(state),
  condition: getMoviesCondition(state),
  genres: getGenres(state),
  isModalOpened: getModalOpened(state),
  trailer: getTrailer(state),
  trailerIsLoading: getTrailerIsLoading(state),
  trailerError: getTrailerError(state),
});


const mapDispatchToProps = {
  fetchMovies,
  fetchGenres,
  fetchTrailer,
  removeTrailerInfo,
  setMoviesCondition,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesSection);
