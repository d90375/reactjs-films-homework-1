import React from 'react';
import PropTypes from 'prop-types';
import FilterTab from '../FilterTab';

import styles from './FilterTabs.scss';

const FilterTabs = (props) => {
  const { genres, fetchByFilter, condition } = props;

  const defaultValue = Number(condition) ? condition : 'Genre';

  const clazz = Number(condition) ? `${styles.select} ${styles.active}` : styles.select;

  console.log(clazz);

  let options;

  if (genres) {
    options = genres.map((genre, index) => <option key={genre} value={index}>{genre}</option>);
  }

  return (
    <div className={styles.container}>
      <FilterTab fetchByFilter={fetchByFilter} condition={condition}>
        Trending
      </FilterTab>
      <FilterTab fetchByFilter={fetchByFilter} condition={condition}>
        Top Rated
      </FilterTab>
      <FilterTab fetchByFilter={fetchByFilter} condition={condition}>
        Coming soon
      </FilterTab>
      <select
        className={clazz}
        defaultValue={defaultValue}
        onChange={(e) => fetchByFilter(e.target.value)}
      >
        <option value="Genre" disabled hidden>Genre</option>
        {options}
      </select>
    </div>
  );
};

FilterTabs.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchByFilter: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
};

export default FilterTabs;
