import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilterTab.scss';

const FilterTab = ({
  children, condition, filter, historyPush,
}) => {
  const className = condition === children ? `${styles.tab} ${styles.active}` : styles.tab;
  return (
    <button
      type="button"
      className={className}
      data-filter={filter}
      onClick={(e) => {
        historyPush(`/?filter=${e.target.dataset.filter}`);
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
  historyPush: PropTypes.func,
};

FilterTab.defaultProps = {
  historyPush: undefined,
};

export default FilterTab;
