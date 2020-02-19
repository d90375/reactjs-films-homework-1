import React from 'react';
import Button from '../Button';

import styles from './MovieDetailsButtons.scss';

const MovieDetailsButtons = () => (
  <div className={styles.movieDetailsButtons}>
    <Button purpose="watch">Watch Now</Button>
    <Button purpose="view">View Info</Button>
  </div>
);

export default MovieDetailsButtons;
