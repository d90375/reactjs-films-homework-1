import { connect } from 'react-redux';
import { getMovie, getMoviePending, getMovieError } from '../../../../modules/movie/movieSelector';
import { fetchMovie } from '../../../../modules/movie/movieAction';
import ViewInfoWindow from './ViewInfoWindow';

const mapStateToProps = (state) => ({
  error: getMovieError(state),
  pending: getMoviePending(state),
  movie: getMovie(state),
});


const mapDispatchToProps = {
  fetchMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewInfoWindow);
