import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchPanel.scss';

const SearchPanel = ({ getSearch }) => (
  <input
    className={styles.input}
    type="search"
    onChange={(e) => {
      getSearch(e);
    }}
  />
);

SearchPanel.propTypes = {
  getSearch: PropTypes.func.isRequired,
};

export default SearchPanel;
