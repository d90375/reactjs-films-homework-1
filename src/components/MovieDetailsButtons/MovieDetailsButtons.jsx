import React from 'react';
import ButtonWatch from '../ButtonWatch';
import ButtonView from '../ButtonView';

import styles from './MovieDetailsButtons.scss';

const MovieDetailsButtons = () => (
  <div className={styles.movieDetailsButtons}>
    <ButtonWatch />
    <ButtonView />
  </div>
);

export default MovieDetailsButtons;
