import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterTab.scss';

const FilterTab = ({
  children, condition, filter, onFilterChange,
}) => {
  const className = condition === children ? `${styles.tab} ${styles.active}` : styles.tab;
  return (
    <button
      type="button"
      className={className}
      data-filter={filter}
      onClick={(e) => {
        onFilterChange(`/?filter=${e.target.dataset.filter}`);
      }}
    >
      {children}
    </button>
  );
};

FilterTab.propTypes = {
  children: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
};

FilterTab.defaultProps = {
  onFilterChange: undefined,
};

export default FilterTab;
