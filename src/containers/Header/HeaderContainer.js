import { connect } from 'react-redux';
import { setMoviesCondition, fetchMovies } from '../../modules/movies/moviesAction';
import { getMoviesCondition } from '../../modules/movies/moviesSelector';
import Header from './Header';

const mapStateToProps = (state) => ({
  condition: getMoviesCondition(state),
});

const mapDispatchToProps = {
  setMoviesCondition,
  fetchMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
