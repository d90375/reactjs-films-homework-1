import { connect } from 'react-redux';
import {
  getMoviesIsLoading, getMoviesError, getMoviesCondition, getMovies, getGenres,
} from '../../modules/movies/moviesSelector';
import {
  getTrailer, getTrailerIsLoading, getTrailerError, getModalOpened,
} from '../../modules/trailer/trailerSelector';
import { fetchTrailer, removeTrailerInfo } from '../../modules/trailer/trailerAction';
import { fetchMovies, setMoviesCondition } from '../../modules/movies/moviesAction';

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
  fetchTrailer,
  removeTrailerInfo,
  setMoviesCondition,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesSection);
