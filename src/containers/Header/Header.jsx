import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Logo from '../../components/Logo';
import SearchPanel from '../../components/SearchPanel';

import styles from './Header.scss';

class Header extends Component {
  getSearch = async (event) => {
    const query = event.target.value;
    const {
      setMoviesCondition,
      history,
    } = this.props;

    if (query !== '') {
      await setMoviesCondition('Search');
      history.push(`/?search=${query}`);
    } else {
      await setMoviesCondition('Trending');
      const { condition } = this.props;
      history.push(`/?filter=${condition}`);
    }
  }

  render() {
    const { location: { search } } = this.props;
    const params = new URLSearchParams(search);
    const query = params.get('search') || '';

    return (
      <header className={styles.header}>
        <Logo />
        <SearchPanel name="Search" getSearch={this.getSearch} query={query} />
      </header>
    );
  }
}

Header.propTypes = {
  setMoviesCondition: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

Header.defaultProps = {
  location: PropTypes.shape({
    search: null,
  }),
};

export default withRouter(Header);
