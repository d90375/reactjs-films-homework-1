import React from 'react';
import PropTypes from 'prop-types';
import FilterTab from '../FilterTab';

import styles from './FilterTabs.scss';

const FilterTabs = ({ genres }) => {
  let options;

  if (genres) {
    options = genres.map((genre) => <option key={genre}>{genre}</option>);
  }

  return (
    <div className={styles.container}>
      <FilterTab className={styles.active}>Trending</FilterTab>
      <FilterTab className={styles.active}>Top Rated</FilterTab>
      <FilterTab className={styles.active}>Coming soon</FilterTab>
      <select className={styles.select} defaultValue="Genre">
        <option value="Genre" disabled hidden>Genre</option>
        {options}
      </select>
    </div>
  );
};

FilterTabs.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterTabs;
