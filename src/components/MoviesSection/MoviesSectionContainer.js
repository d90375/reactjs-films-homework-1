import { connect } from 'react-redux';
import { getMoviesPending, getMoviesError, getMoviesCondition } from '../../modules/movies/moviesSelector';
import { getGenres } from '../../modules/genres/genresSelector';
import { getMovie } from '../../modules/movie/movieSelector';
import { fetchMovies } from '../../modules/movies/moviesAction';
import { fetchGenres } from '../../modules/genres/genresAction';
import { removeMovieInfo } from '../../modules/movie/movieAction';
import MoviesSection from './MoviesSection';

const mapStateToProps = (state) => ({
  error: getMoviesError(state),
  pending: getMoviesPending(state),
  condition: getMoviesCondition(state),
  genres: getGenres(state),
  movie: getMovie(state),
});


const mapDispatchToProps = {
  fetchMovies,
  fetchGenres,
  removeMovieInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesSection);
