import { connect } from 'react-redux';
import { fetchTrailer } from '../../../../modules/trailer/trailerAction';
import WatchNowWindow from './WatchNowWindow';

const mapDispatchToProps = {
  fetchTrailer,
};

export default connect(
  null,
  mapDispatchToProps,
)(WatchNowWindow);
