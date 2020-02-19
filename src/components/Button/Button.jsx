import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

const Button = ({ children, purpose }) => (
  <button className={`${styles.button} ${styles[purpose]}`} type="button">{children}</button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
};

export default Button;
