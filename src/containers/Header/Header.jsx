import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import SearchPanel from '../../components/SearchPanel';

import styles from './Header.scss';

class Header extends Component {
  state = {
    timer: null,
  };

  getSearch = async (event) => {
    let { timer } = this.state;

    if (timer) {
      clearInterval(timer);
    }

    const query = event.target.value;
    const { setMoviesCondition, fetchMovies } = this.props;
    timer = setTimeout(async () => {
      if (query !== '') {
        await setMoviesCondition('Search');
        const { condition } = this.props;
        fetchMovies(condition, query);
      } else {
        await setMoviesCondition('Trending');
        const { condition } = this.props;
        fetchMovies(condition);
      }
    }, 400);
    this.setState({ timer });
  }


  render() {
    return (
      <header className={styles.header}>
        <Logo />
        <SearchPanel getSearch={this.getSearch} />
      </header>
    );
  }
}

Header.propTypes = {
  setMoviesCondition: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
};

export default Header;
