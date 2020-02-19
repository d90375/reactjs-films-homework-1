import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieDescription.scss';

const MovieDescription = ({ description, descriptionClass }) => (
  <p className={`${styles.movieDescription} ${styles[descriptionClass]}`}>{ description }</p>
);

MovieDescription.propTypes = {
  description: PropTypes.string.isRequired,
  descriptionClass: PropTypes.string.isRequired,
};

export default MovieDescription;
