import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './FilterTab.scss';

const FilterTab = ({
  children, fetchByFilter, condition, filter,
}) => {
  const className = condition === children ? `${styles.tab} ${styles.active}` : styles.tab;
  return (
    <Link to={`/${filter}`}>
      <button
        type="button"
        className={className}
        data-filter={filter}
        onClick={(e) => fetchByFilter(e.target.dataset.filter)}
      >
        {children}
      </button>
    </Link>
  );
};

FilterTab.propTypes = {
  children: PropTypes.string.isRequired,
  fetchByFilter: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};

export default FilterTab;
