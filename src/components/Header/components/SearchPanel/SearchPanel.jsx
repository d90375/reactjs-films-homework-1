import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchPanel.scss';

class SearchPanel extends Component {
  state = { value: '' };

  handleChange = async (event) => {
    const query = event.target.value;
    this.setState({ value: query });
    const { setMoviesCondition, fetchMovies, genres } = this.props;

    if (query !== '') {
      await setMoviesCondition('search');
      const { condition } = this.props;
      fetchMovies(condition, genres, query);
    } else {
      await setMoviesCondition('tranding');
      const { condition } = this.props;
      fetchMovies(condition, genres);
    }
  }

  render() {
    const { value } = this.state;
    return (
      <input
        className={styles.input}
        type="search"
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

SearchPanel.propTypes = {
  setMoviesCondition: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  genres: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
};

export default SearchPanel;
