import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import styles from './WatchNowWindow.scss';

const WatchNowWindow = ({ switchViewInfo, film: { id }, fetchTrailer }) => (
  <div className={styles.container}>
    <button className={styles.watch} type="button" onClick={() => fetchTrailer(id)}>&#9658;</button>
    <p>Watch Now</p>
    <Button onClick={switchViewInfo} color="secondary">View Info</Button>
  </div>
);

WatchNowWindow.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  switchViewInfo: PropTypes.func.isRequired,
};

export default WatchNowWindow;
