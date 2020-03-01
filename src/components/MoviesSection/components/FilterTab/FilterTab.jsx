import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterTab.scss';

const FilterTab = ({ children, fetchByFilter }) => (
  <p className={styles.tab} onClick={(e) => fetchByFilter(e.target.innerText)}>
    {children}
  </p>
);

FilterTab.propTypes = {
  children: PropTypes.string.isRequired,
  fetchByFilter: PropTypes.func.isRequired,
};

export default FilterTab;
