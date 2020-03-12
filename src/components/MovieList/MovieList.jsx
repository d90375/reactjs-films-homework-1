import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';

import styles from './MovieList.scss';

const MovieList = ({
  movies, fetchTrailer, removeDetailsInfo, setMoviesCondition,
}) => {
  const movieItems = movies.map((film) => (
    <MovieItem
      key={film.id}
      film={film}
      fetchTrailer={fetchTrailer}
      removeDetailsInfo={removeDetailsInfo}
      setMoviesCondition={setMoviesCondition}
    />
  ));

  return (
    <div className={styles.container}>
      {movieItems.length ? movieItems
        : <p className={styles.noResults}>No results</p>}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  removeDetailsInfo: PropTypes.func.isRequired,
  setMoviesCondition: PropTypes.func.isRequired,
};

export default MovieList;
