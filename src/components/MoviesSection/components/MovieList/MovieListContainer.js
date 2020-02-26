import { connect } from 'react-redux';
import { getTranding } from '../../../../modules/trending/trendingSelector';
import MovieList from './MovieList';
import { getSearch, getSearchQuery } from '../../../../modules/search/searchSelector';

const mapStateToProps = (state) => ({
  tranding: getTranding(state),
  search: getSearch(state),
  searchQuery: getSearchQuery(state),
});

export default connect(
  mapStateToProps,
)(MovieList);