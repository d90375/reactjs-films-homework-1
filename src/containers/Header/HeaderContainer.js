import { connect } from 'react-redux';
import { setMoviesCondition, fetchMovies, setSearchQuery } from '../../modules/movies/moviesAction';
import { getMoviesCondition, getQuery } from '../../modules/movies/moviesSelector';
import Header from './Header';

export const mapStateToProps = (state) => ({
  condition: getMoviesCondition(state),
  query: getQuery(state),
});

const mapDispatchToProps = {
  setMoviesCondition,
  fetchMovies,
  setSearchQuery,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
