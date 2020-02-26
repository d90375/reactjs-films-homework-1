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
    const {
      error, pending, movie: { key }, removeMovieInfo,
    } = this.props;

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
        {key ? <ModalWindow movieKey={key} removeMovieInfo={removeMovieInfo} /> : null}
        <MovieList />
      </section>
    );
  }
}

MoviesSection.propTypes = {
  error: PropTypes.oneOf([null, Object]).isRequired,
  pending: PropTypes.bool.isRequired,
  genres: PropTypes.string.isRequired,
  fetchGenres: PropTypes.func.isRequired,
  fetchTrending: PropTypes.func.isRequired,
  removeMovieInfo: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    key: PropTypes.oneOf([undefined, String]),
  }).isRequired,
};

export default MoviesSection;
