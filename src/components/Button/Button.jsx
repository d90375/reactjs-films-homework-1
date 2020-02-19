import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

const Button = ({ children, purpose, clickHandler }) => (
  <button
    className={`${styles.button} ${styles[purpose]}`}
    type="button"
    onClick={clickHandler}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
