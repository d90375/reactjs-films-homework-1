import React from 'react';
import MovieItem from '../MovieItem';
import WatchNowWindow from '../WatchNowWindow';
import ViewInfoWindow from '../ViewInfoWindow';

import styles from './MovieList.scss';

const MovieList = ({ tranding, search, searchQuery }) => {
  const movieArr = searchQuery ? search : tranding;
  const movieItems = movieArr.map((film, index) => {
    const id = index;
    return (
      <div className={styles.movie}>
        <MovieItem key={film.id} film={film} />
        <WatchNowWindow key={`watch${id}`} film={film} />
        <ViewInfoWindow key={`view${id}`} film={film} />
      </div>
    );
  });

  return (
    <div className={styles.container}>
      {movieItems}
    </div>
  );
};

export default MovieList;