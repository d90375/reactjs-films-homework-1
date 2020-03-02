import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterTab.scss';

const FilterTab = ({ children, fetchByFilter, condition }) => {
  const clazz = condition === children ? `${styles.tab} ${styles.active}` : styles.tab;
  return (
    <p className={clazz} onClick={(e) => fetchByFilter(e.target.innerText)}>
      {children}
    </p>
  );
};

FilterTab.propTypes = {
  children: PropTypes.string.isRequired,
  fetchByFilter: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
};

export default FilterTab;
