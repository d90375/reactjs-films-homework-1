import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchPanel.scss';

class SearchPanel extends Component {
  state = { value: '' };

  handleChange = (event) => {
    const query = event.target.value;
    const { fetchSearch, genres, setSearchQuery } = this.props;
    this.setState({ value: query });
    if (query !== '') {
      fetchSearch(query, genres);
    }

    setSearchQuery(query);
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
  fetchSearch: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  genres: PropTypes.string.isRequired,
};

export default SearchPanel;
