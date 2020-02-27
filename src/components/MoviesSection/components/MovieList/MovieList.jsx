import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';

import styles from './MovieList.scss';

const MovieList = ({ movies }) => {
  const movieItems = movies.map((film) => (
    <MovieItem film={film} />
  ));

  return (
    <div className={styles.container}>
      {movieItems.length ? movieItems
        : <p className={styles.noResults}>No results</p>}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieList;
