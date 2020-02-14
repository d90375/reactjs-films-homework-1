import React from 'react';
import PropTypes from 'prop-types';

import styles from './movieDetailsDescription.scss';

const MovieDetailsDescription = ({ description }) => (
  <p className={styles.movieDetailsDescription}>{ description }</p>
);

MovieDetailsDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default MovieDetailsDescription;
