import { connect } from 'react-redux';
import { getSearchPending, getSearchError } from '../../../../modules/search/searchSelector';
import { getGenres } from '../../../../modules/genres/genresSelector';
import { fetchSearch, setSearchQuery } from '../../../../modules/search/searchAction';
import SearchPanel from './SearchPanel';

const mapStateToProps = (state) => ({
  error: getSearchPending(state),
  pending: getSearchError(state),
  genres: getGenres(state),
});

const mapDispatchToProps = {
  fetchSearch,
  setSearchQuery,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPanel);
