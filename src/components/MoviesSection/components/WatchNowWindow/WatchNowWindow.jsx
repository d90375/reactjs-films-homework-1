import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button';

import styles from './WatchNowWindow.scss';

class WatchNowWindow extends Component {
  handleClick = () => {
    const { film: { id }, fetchTrailer } = this.props;
    fetchTrailer(id);
  };

  render() {
    const { switchViewInfo } = this.props;
    return (
      <div className={styles.container}>
        <button className={styles.watch} type="button" onClick={this.handleClick}>&#9658;</button>
        <p>Watch Now</p>
        <Button onClick={switchViewInfo} color="secondary">View Info</Button>
      </div>
    );
  }
}

WatchNowWindow.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  switchViewInfo: PropTypes.func.isRequired,
};

export default WatchNowWindow;
