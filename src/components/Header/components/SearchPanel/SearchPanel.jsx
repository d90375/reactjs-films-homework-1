import React, { Component } from 'react';

import styles from './SearchPanel.scss';

class SearchPanel extends Component {
  state = { value: '' };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
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
