import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchPanel.scss';

const SearchPanel = ({ getSearch, query }) => (
  <input
    className={styles.input}
    type="search"
    onChange={(e) => {
      getSearch(e);
    }}
    value={query}
  />
);

SearchPanel.propTypes = {
  getSearch: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchPanel;
