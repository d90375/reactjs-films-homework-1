import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterTab.scss';

const FilterTab = ({ children }) => (
  <p className={styles.tab}>
    {children}
  </p>
);

FilterTab.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FilterTab;
