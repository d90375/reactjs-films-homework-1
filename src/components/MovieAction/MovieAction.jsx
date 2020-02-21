import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieDescription from '../MovieDescription';
import Button from '../Button';

import styles from './MovieAction.scss';

class MovieAction extends Component {
  state = {
    isDescriptionOpened: false,
    buttonValue: 'View Info',
  }

  clickViewHandler = () => {
    this.setState(({ isDescriptionOpened, buttonValue }) => ({
      isDescriptionOpened: !isDescriptionOpened,
      buttonValue: buttonValue === 'View Info' ? 'Hide Info' : 'View Info',
    }));
  };

  render() {
    const { description } = this.props;
    const { isDescriptionOpened, buttonValue } = this.state;
    return (
      <div className={styles.container}>
        {isDescriptionOpened ? <MovieDescription description={description} /> : null}
        <div className={styles.buttonsContainer}>
          <Button color="primary">Watch Now</Button>
          <Button color="secondary" onClick={this.clickViewHandler} aria-label="view">{buttonValue}</Button>
        </div>
      </div>
    );
  }
}

MovieAction.propTypes = {
  description: PropTypes.string.isRequired,
};

export default MovieAction;
