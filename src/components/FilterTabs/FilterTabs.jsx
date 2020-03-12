import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import FilterTab from '../FilterTab';

import styles from './FilterTabs.scss';

const FilterTabs = (props) => {
  const {
    genres, fetchByFilter, condition, history,
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
      <FilterTab fetchByFilter={fetchByFilter} condition={condition} filter="Trending">
        Trending
      </FilterTab>
      <FilterTab fetchByFilter={fetchByFilter} condition={condition} filter="Top Rated">
        Top Rated
      </FilterTab>
      <FilterTab fetchByFilter={fetchByFilter} condition={condition} filter="Coming soon">
        Coming soon
      </FilterTab>
      <select
        className={className}
        name="Genre"
        defaultValue={genreId}
        onChange={(e) => {
          fetchByFilter(e.target.value);
          history.push(`/genre/${e.target.value}`);
        }}
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(FilterTabs);
