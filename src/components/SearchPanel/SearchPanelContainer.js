import { connect } from 'react-redux';
import { setMoviesCondition, fetchMovies } from '../../modules/movies/moviesAction';
import { getMoviesCondition } from '../../modules/movies/moviesSelector';
import { getGenres } from '../../modules/genres/genresSelector';
import SearchPanel from './SearchPanel';

const mapStateToProps = (state) => ({
  condition: getMoviesCondition(state),
  genres: getGenres(state),
});

const mapDispatchToProps = {
  setMoviesCondition,
  fetchMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPanel);
