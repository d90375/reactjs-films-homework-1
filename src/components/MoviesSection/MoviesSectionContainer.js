import { connect } from 'react-redux';
import { getTrendingPending, getTrendingError } from '../../modules/trending/trendingSelector';
import { getGenres } from '../../modules/genres/genresSelector';
import { getMovie } from '../../modules/movie/movieSelector';
import { fetchTrending } from '../../modules/trending/trendingAction';
import { fetchGenres } from '../../modules/genres/genresAction';
import { removeMovieInfo } from '../../modules/movie/movieAction';
import MoviesSection from './MoviesSection';

const mapStateToProps = (state) => ({
  error: getTrendingError(state),
  pending: getTrendingPending(state),
  genres: getGenres(state),
  movie: getMovie(state),
});


const mapDispatchToProps = {
  fetchTrending,
  fetchGenres,
  removeMovieInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesSection);
