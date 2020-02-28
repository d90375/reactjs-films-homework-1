import { connect } from 'react-redux';
import { fetchTrailer } from '../../../../modules/trailer/trailerAction';
import ViewInfoWindow from './ViewInfoWindow';

const mapDispatchToProps = {
  fetchTrailer,
};

export default connect(
  null,
  mapDispatchToProps,
)(ViewInfoWindow);
