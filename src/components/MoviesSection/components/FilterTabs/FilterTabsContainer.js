import { connect } from 'react-redux';
import { setMoviesCondition } from '../../../../modules/movies/moviesAction';
import FilterTabs from './FilterTabs';

const mapDispatchToProps = {
  setMoviesCondition,
};

export default connect(
  null,
  mapDispatchToProps,
)(FilterTabs);
