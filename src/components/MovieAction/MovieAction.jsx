import React from 'react';
import PropTypes from 'prop-types';
import MovieDescription from '../MovieDescription';
import Button from '../Button';

import styles from './MovieAction.scss';

const MovieAction = ({ description }) => (
  <div className={styles.info}>
    <MovieDescription description={description} />
    <div className={styles.buttonsContainer}>
      <Button purpose="watch">Watch Now</Button>
      <Button purpose="view">View Info</Button>
    </div>
  </div>
);

MovieAction.propTypes = {
  description: PropTypes.string.isRequired,
};

export default MovieAction;
