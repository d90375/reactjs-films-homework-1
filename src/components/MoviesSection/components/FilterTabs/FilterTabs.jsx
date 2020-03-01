import React from 'react';
import PropTypes from 'prop-types';
import FilterTab from '../FilterTab';

import styles from './FilterTabs.scss';

const FilterTabs = ({ genres, fetchByFilter }) => {
  let options;

  if (genres) {
    options = genres.map((genre) => <option key={genre}>{genre}</option>);
  }

  return (
    <div className={styles.container}>
      <FilterTab className={styles.active} fetchByFilter={fetchByFilter}>
        Trending
      </FilterTab>
      <FilterTab className={styles.active} fetchByFilter={fetchByFilter}>
        Top Rated
      </FilterTab>
      <FilterTab className={styles.active} fetchByFilter={fetchByFilter}>
        Coming soon
      </FilterTab>
      <select className={styles.select} defaultValue="Genre" onChange={(e) => fetchByFilter(e.target.value)}>
        <option value="Genre" disabled hidden>Genre</option>
        {options}
      </select>
    </div>
  );
};

FilterTabs.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchByFilter: PropTypes.func.isRequired,
};

export default FilterTabs;
