import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchPanel.scss';

class SearchPanel extends Component {
  state = {
    value: '',
  };

  handleChange = async (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;
    const { getSearch } = this.props;

    return (
      <input
        className={styles.input}
        type="search"
        value={value}
        onChange={(e) => {
          this.handleChange(e);
          getSearch(e);
        }}
      />
    );
  }
}

SearchPanel.propTypes = {
  getSearch: PropTypes.func.isRequired,
};

export default SearchPanel;
