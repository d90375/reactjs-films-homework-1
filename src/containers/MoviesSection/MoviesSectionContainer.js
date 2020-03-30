import { connect } from 'react-redux';
import {
  getMoviesIsLoading, getMoviesError, getMoviesCondition, getMovies, getGenres,
} from '../../modules/movies/moviesSelector';
import {
  getTrailer, getTrailerIsLoading, getTrailerError, getModalOpened,
} from '../../modules/trailer/trailerSelector';
import { fetchTrailer, removeTrailerInfo } from '../../modules/trailer/trailerAction';
import {
  fetchMovies, setMoviesCondition, setSearchQuery, deleteSearchQuery,
} from '../../modules/movies/moviesAction';
import { removeDetailsInfo } from '../../modules/details/detailsAction';

import MoviesSection from './MoviesSection';

export const mapStateToProps = (state) => ({
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
  removeDetailsInfo,
  setSearchQuery,
  deleteSearchQuery,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesSection);
