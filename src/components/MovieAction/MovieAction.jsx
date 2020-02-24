import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieDescription from '../MovieDescription';
import Button from '../Button';

import styles from './MovieAction.scss';

class MovieAction extends Component {
  state = {
    isDescriptionOpened: false,
  }

  clickViewHandler = () => {
    this.setState(({ isDescriptionOpened }) => ({
      isDescriptionOpened: !isDescriptionOpened,
    }));
  };

  render() {
    const { description } = this.props;
    const { isDescriptionOpened } = this.state;
    return (
      <div className={styles.container}>
        {isDescriptionOpened && <MovieDescription description={description} />}
        <div className={styles.buttonsContainer}>
          <Button color="primary">Watch Now</Button>
          <Button color="secondary" onClick={this.clickViewHandler}>
            {isDescriptionOpened ? 'Hide Info' : 'View Info'}
          </Button>
        </div>
      </div>
    );
  }
}

MovieAction.propTypes = {
  description: PropTypes.string.isRequired,
};

export default MovieAction;
