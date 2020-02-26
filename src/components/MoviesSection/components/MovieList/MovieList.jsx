import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';
// import WatchNowWindow from '../WatchNowWindow';
// import ViewInfoWindow from '../ViewInfoWindow';

import styles from './MovieList.scss';

const MovieList = ({ movies }) => {
  const movieItems = movies.map((film) => (
    // <div key={film.id} className={styles.movie}>
    <MovieItem film={film} />

    //   <WatchNowWindow key={`watch${id}`} film={film} />
    //   { film.viewInfo ? <ViewInfoWindow key={`view${id}`} film={film} /> : null }

    // </div>
  ));

  return (
    <div className={styles.container}>
      {movieItems}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieList;
