import React, { Component } from 'react';

import styles from './searchPanel.scss';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <form className={styles.search}>
        <input
          className={styles.search__input}
          aria-label="search"
          type="search"
          value={value}
          onChange={this.handleChange}
        />
        <input type="submit" className={styles.search__submit} />
      </form>
    );
  }
}

export default SearchPanel;
