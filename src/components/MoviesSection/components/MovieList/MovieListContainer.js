import { connect } from 'react-redux';
import { getMovies } from '../../../../modules/movies/moviesSelector';
import MovieList from './MovieList';

const mapStateToProps = (state) => ({
  movies: getMovies(state),
});

export default connect(
  mapStateToProps,
)(MovieList);
