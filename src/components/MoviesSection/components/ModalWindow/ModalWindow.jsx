import React from 'react';
import PropTypes from 'prop-types';

import styles from './ModalWindow.scss';

const ModalWindow = ({ movieKey, removeMovieInfo }) => (
  <div className={styles.container}>
    <iframe
      className={styles.iframe}
      title="trailer"
      src={`https://www.youtube.com/embed/${movieKey}`}
      frameBorder="0"
      allowFullScreen
    />
    <button className={styles.close} type="button" onClick={removeMovieInfo}>&#215;</button>
  </div>
);

ModalWindow.propTypes = {
  movieKey: PropTypes.string.isRequired,
  removeMovieInfo: PropTypes.func.isRequired,
};

export default ModalWindow;
