import { connect } from 'react-redux';
import { getDetails, getDetailsIsLoading, getDetailsError } from '../../modules/details/detailsSelector';
import { fetchDetails } from '../../modules/details/detailsAction';

import MovieDetails from './MovieDetails';

export const mapStateToProps = (state) => ({
  details: getDetails(state),
  error: getDetailsError(state),
  isLoading: getDetailsIsLoading(state),
});

const mapDispatchToProps = {
  fetchDetails,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetails);
