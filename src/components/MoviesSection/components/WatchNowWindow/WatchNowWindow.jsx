import React, { Component } from 'react';
import Button from '../../../Button';

import styles from './WatchNowWindow.scss';

class WatchNowWindow extends Component {
  handleClick = async () => {
    const { film: { id }, fetchMovie } = this.props;
    await fetchMovie(id);
  };

  render() {
    return (
      <div className={styles.container}>
        <button className={styles.watch} type="button" onClick={this.handleClick}>&#9658;</button>
        <p>Watch Now</p>
        <Button color="secondary">View Info</Button>
      </div>
    );
  }
}

export default WatchNowWindow;