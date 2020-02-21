import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieDescription.scss';

const MovieDescription = ({ description }) => (
  <p className={styles.description}>{ description }</p>
);

MovieDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default MovieDescription;
