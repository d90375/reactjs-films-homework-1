import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button';

import styles from './WatchNowWindow.scss';

class WatchNowWindow extends Component {
  handleClick = async () => {
    const { film: { id }, fetchMovie } = this.props;
    await fetchMovie(id);
  };

  openViewInfo = async () => {

  }

  render() {
    return (
      <div className={styles.container}>
        <button className={styles.watch} type="button" onClick={this.handleClick}>&#9658;</button>
        <p>Watch Now</p>
        <Button onClick={this.openViewInfo} color="secondary">View Info</Button>
      </div>
    );
  }
}

WatchNowWindow.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  fetchMovie: PropTypes.func.isRequired,
};

export default WatchNowWindow;
