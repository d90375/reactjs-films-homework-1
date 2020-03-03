import { connect } from 'react-redux';
import {
  getMoviesPending, getMoviesError, getMoviesCondition, getMovies,
} from '../../modules/movies/moviesSelector';
import { getGenres } from '../../modules/genres/genresSelector';
import {
  getTrailer, getTrailerPending, getTrailerError, getModalWindow,
} from '../../modules/trailer/trailerSelector';
import { fetchTrailer, removeTrailerInfo } from '../../modules/trailer/trailerAction';
import { fetchMovies, setMoviesCondition } from '../../modules/movies/moviesAction';
import { fetchGenres } from '../../modules/genres/genresAction';

import MoviesSection from './MoviesSection';

const mapStateToProps = (state) => ({
  error: getMoviesError(state),
  pending: getMoviesPending(state),
  movies: getMovies(state),
  condition: getMoviesCondition(state),
  genres: getGenres(state),
  isModalWindow: getModalWindow(state),
  trailer: getTrailer(state),
  trailerPending: getTrailerPending(state),
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
