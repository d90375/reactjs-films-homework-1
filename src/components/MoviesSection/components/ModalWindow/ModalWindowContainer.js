import { connect } from 'react-redux';
import {
  getMovie, getMoviePending, getMovieError, getModalWindow,
} from '../../../../modules/movie/movieSelector';
import { removeMovieInfo } from '../../../../modules/movie/movieAction';
import { getGenres } from '../../../../modules/genres/genresSelector';
import ModalWindow from './ModalWindow';

const mapStateToProps = (state) => ({
  isModalWindow: getModalWindow(state),
  movie: getMovie(state),
  moviePending: getMoviePending(state),
  movieError: getMovieError(state),
  genres: getGenres(state),
});

const mapDispatchToProps = {
  removeMovieInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalWindow);
