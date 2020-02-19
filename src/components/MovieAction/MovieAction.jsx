import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieDescription from '../MovieDescription';
import Button from '../Button';

import styles from './MovieAction.scss';

class MovieAction extends Component {
  state = {
    descriptionClass: 'hide',
    buttonValue: 'View Info',
  }

  clickViewHandler = () => {
    this.setState(({ descriptionClass }) => (descriptionClass === 'show'
      ? { descriptionClass: 'hide', buttonValue: 'View Info' }
      : { descriptionClass: 'show', buttonValue: 'Hide Info' }));
  }

  render() {
    const { description } = this.props;
    const { descriptionClass, buttonValue } = this.state;
    return (
      <div className={styles.container}>
        <MovieDescription descriptionClass={descriptionClass} description={description} />
        <div className={styles.buttonsContainer}>
          <Button purpose="watch">Watch Now</Button>
          <Button purpose="view" clickHandler={this.clickViewHandler}>{buttonValue}</Button>
        </div>
      </div>
    );
  }
}

MovieAction.propTypes = {
  description: PropTypes.string.isRequired,
};

export default MovieAction;
