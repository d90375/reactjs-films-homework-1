import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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
    const {
      setMoviesCondition,
      fetchMovies,
      setSearchQuery,
      history,
    } = this.props;

    setSearchQuery(query);

    timer = setTimeout(async () => {
      if (query !== '') {
        await setMoviesCondition('Search');
        const { condition } = this.props;
        fetchMovies(condition, query);
        history.push(`/?search=${query}`);
      } else {
        await setMoviesCondition('Trending');
        const { condition } = this.props;
        fetchMovies(condition);
        history.push(`/${condition}`);
      }
    }, 400);
    this.setState({ timer });
  }

  render() {
    const { query } = this.props;
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
  fetchMovies: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  condition: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Header);
