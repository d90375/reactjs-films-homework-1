import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './components/MovieList';
import ModalWindow from './components/ModalWindow/ModalWindow';

import styles from './MoviesSection.scss';


class MoviesSection extends Component {
  async componentDidMount() {
    const { fetchGenres, fetchTrending } = this.props;
    await fetchGenres();
    const { genres } = this.props;
    fetchTrending(genres);
  }

  render() {
    const { error, pending, movie: { key } } = this.props;
    console.log(key);

    if (error) {
      return (
        <div className={styles.container}>{`Error! ${error.message}`}</div>
      );
    }

    if (pending) {
      return <div className={styles.container}>Loading...</div>;
    }

    return (
      <section className={styles.container}>
        {key ? <ModalWindow key={key} /> : null}
        <MovieList />
      </section>
    );
  }
}

export default MoviesSection;