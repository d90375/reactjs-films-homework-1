import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchPanel.scss';

class SearchPanel extends Component {
  state = {
    value: '',
    timer: null,
  };

  handleChange = async (event) => {
    let { timer } = this.state;

    if (timer) {
      clearInterval(timer);
    }

    const query = event.target.value;
    this.setState({ value: query });
    const { setMoviesCondition, fetchMovies, genres } = this.props;
    timer = setTimeout(async () => {
      if (query !== '') {
        await setMoviesCondition('Search');
        const { condition } = this.props;
        fetchMovies(condition, genres, query);
      } else {
        await setMoviesCondition('Trending');
        const { condition } = this.props;
        fetchMovies(condition, genres);
      }
    }, 400);
    this.setState({ timer });
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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  condition: PropTypes.string.isRequired,
};

export default SearchPanel;
