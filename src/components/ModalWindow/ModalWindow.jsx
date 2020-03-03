import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

import styles from './ModalWindow.scss';

const ModalWindow = ({
  trailer, removeTrailerInfo, trailerPending, trailerError,
}) => {
  if (trailerPending) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  if (trailerError) {
    return (
      <div className={styles.container}>
        <div className={styles.message}>
          {`Error! ${trailerError.message}`}
        </div>
        <button className={styles.close} type="button" onClick={removeTrailerInfo}>&#215;</button>
      </div>
    );
  }

  if (trailer) {
    return (
      <div className={styles.container}>
        <iframe
          className={styles.iframe}
          title="trailer"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          frameBorder="0"
          allowFullScreen
        />
        <button className={styles.close} type="button" onClick={removeTrailerInfo}>&#215;</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        Trailer not found
      </div>
      <button className={styles.close} type="button" onClick={removeTrailerInfo}>&#215;</button>
    </div>
  );
};

ModalWindow.propTypes = {
  trailer: PropTypes.shape({
    key: PropTypes.string,
  }),
  removeTrailerInfo: PropTypes.func.isRequired,
  trailerPending: PropTypes.bool.isRequired,
  trailerError: PropTypes.shape({
    message: PropTypes.string,
  }),
};

ModalWindow.defaultProps = {
  trailer: null,
  trailerError: null,
};

export default ModalWindow;
