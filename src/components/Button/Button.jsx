import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

const Button = ({ children, color, onClick }) => (
  <button
    className={`${styles.button} ${styles[color]}`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
