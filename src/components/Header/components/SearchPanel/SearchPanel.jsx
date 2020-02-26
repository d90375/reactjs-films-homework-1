import React, { Component } from 'react';

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

export default SearchPanel;
