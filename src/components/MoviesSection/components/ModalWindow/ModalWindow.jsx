import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../../Spinner';

import styles from './ModalWindow.scss';

const ModalWindow = ({
  movie, removeMovieInfo, moviePending, movieError,
}) => {
  if (moviePending) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  if (movieError) {
    return (
      <div className={styles.container}>
        <div className={styles.message}>
          {`Error! ${movieError.message}`}
        </div>
        <button className={styles.close} type="button" onClick={removeMovieInfo}>&#215;</button>
      </div>
    );
  }

  if (movie) {
    return (
      <div className={styles.container}>
        <iframe
          className={styles.iframe}
          title="trailer"
          src={`https://www.youtube.com/embed/${movie.key}`}
          frameBorder="0"
          allowFullScreen
        />
        <button className={styles.close} type="button" onClick={removeMovieInfo}>&#215;</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        Trailer not found
      </div>
      <button className={styles.close} type="button" onClick={removeMovieInfo}>&#215;</button>
    </div>
  );
};

ModalWindow.propTypes = {
  movie: PropTypes.oneOf([null, Object]).isRequired,
  removeMovieInfo: PropTypes.func.isRequired,
  moviePending: PropTypes.bool.isRequired,
  movieError: PropTypes.oneOf([null, Object]).isRequired,
};

export default ModalWindow;
