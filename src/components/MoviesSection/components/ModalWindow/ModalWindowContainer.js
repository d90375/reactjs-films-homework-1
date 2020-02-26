import { connect } from 'react-redux';
import { removeMovieInfo } from '../../../../modules/movie/movieAction';
import ModalWindow from './ModalWindow';


const mapDispatchToProps = {
  removeMovieInfo,
};

export default connect(
  null,
  mapDispatchToProps,
)(ModalWindow);
