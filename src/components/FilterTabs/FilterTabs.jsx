import React from 'react';
import PropTypes from 'prop-types';
import FilterTab from '../FilterTab';

import styles from './FilterTabs.scss';

const FilterTabs = (props) => {
  const {
    genres,
    condition,
    historyPush,
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
      <FilterTab condition={condition} filter="Trending" historyPush={historyPush}>
        Trending
      </FilterTab>
      <FilterTab condition={condition} filter="Top Rated" historyPush={historyPush}>
        Top Rated
      </FilterTab>
      <FilterTab condition={condition} filter="Coming soon" historyPush={historyPush}>
        Coming soon
      </FilterTab>
      <select
        className={className}
        name="Genre"
        defaultValue={genreId}
        onChange={(e) => historyPush(`/?genreId=${e.target.value}`)}
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
  historyPush: PropTypes.func,
};

FilterTabs.defaultProps = {
  historyPush: undefined,
  genres: null,
};

export default FilterTabs;
