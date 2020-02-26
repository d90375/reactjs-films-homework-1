import React, { Component } from 'react';

import styles from './ModalWindow.scss';

class ModalWindow extends Component {
  handleClick = async () => {
    const { removeMovieInfo } = this.props;
    removeMovieInfo();
  };

  render() {
    const { key } = this.props;
    return (
      <div className={styles.container}>
        <iframe
          className={styles.iframe}
          title="trailer"
          src={`https://www.youtube.com/embed/${key}`}
          frameBorder="0"
          allowFullScreen
        />
        <button className={styles.close} type="button" onClick={this.handleClick}>&#215;</button>
      </div>
    );
  }
}

export default ModalWindow;