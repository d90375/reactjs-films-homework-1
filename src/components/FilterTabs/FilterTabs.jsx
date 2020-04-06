import React from 'react';
import PropTypes from 'prop-types';
import FilterTab from '../FilterTab';

import styles from './FilterTabs.scss';

const FilterTabs = (props) => {
  const {
    genres,
    condition,
    onFilterChange,
  } = props;
  const genreId = Number(condition) ? condition : 'Genre';
  const className = Number(condition) ? `${styles.select} ${styles.active}` : styles.select;

  let options;

  if (genres) {
    options = genres.map((genre, index) => (
      <option
        key={genre}
        value={index}
      >
        {genre}
      </option>
    ));
  }

  return (
    <div className={styles.container}>
      <FilterTab condition={condition} filter="Trending" onFilterChange={onFilterChange}>
        Trending
      </FilterTab>
      <FilterTab condition={condition} filter="Top Rated" onFilterChange={onFilterChange}>
        Top Rated
      </FilterTab>
      <FilterTab condition={condition} filter="Coming soon" onFilterChange={onFilterChange}>
        Coming soon
      </FilterTab>
      <select
        className={className}
        name="Genre"
        defaultValue={genreId}
        onChange={(e) => onFilterChange(`/?genreId=${e.target.value}`)}
      >
        <option value="Genre" disabled hidden>Genre</option>
        {options}
      </select>
    </div>
  );
};

FilterTabs.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  condition: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
};

FilterTabs.defaultProps = {
  onFilterChange: undefined,
  genres: null,
};

export default FilterTabs;
