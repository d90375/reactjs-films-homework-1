import React from 'react';
import ButtonWatch from '../ButtonWatch';
import ButtonView from '../ButtonView';

import styles from './movieDetailsButtons.scss';

const MovieDetailsButtons = () => (
  <div className={styles.movieDetailsButtons}>
    <ButtonWatch />
    <ButtonView />
  </div>
);

export default MovieDetailsButtons;
