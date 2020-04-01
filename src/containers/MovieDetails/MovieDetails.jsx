import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import MovieInfo from '../../components/MovieInfo';
import MovieRating from '../../components/MovieRating';
import MovieAction from '../../components/MovieAction';
import Spinner from '../../components/Spinner';

import styles from './MovieDetails.scss';

class MovieDetails extends Component {
  componentDidMount() {
    const { location: { pathname }, fetchDetails } = this.props;
    const id = pathname.replace(/\/details\//, '');
    fetchDetails(id);
  }

  componentDidUpdate(prevProps) {
    const { location: { pathname }, fetchDetails } = this.props;
    if (pathname !== prevProps.location.pathname) {
      const id = pathname.replace(/\/details\//, '');
      fetchDetails(id);
    }
  }

  render() {
    const { error, details, fetchTrailer } = this.props;
    const { location: { pathname } } = this.props;
    const id = pathname.replace(/\/details\//, '');

    if (error) {
      return (
        <section className={styles.container}>{`Error! ${error.message}`}</section>
      );
    }

    if (details) {
      const {
        background, rating, overview, ...info
      } = details;

      const style = { backgroundImage: `url(${background})` };
      return (
        <section className={styles.container} style={style}>
          <div className={styles.info}>
            <MovieInfo info={info} />
            <MovieRating rating={rating} />
          </div>
          <MovieAction description={overview} id={id} fetchTrailer={fetchTrailer} />
        </section>
      );
    }

    return (
      <section className={styles.container}>
        <Spinner />
      </section>
    );
  }
}

MovieDetails.propTypes = {
  fetchDetails: PropTypes.func.isRequired,
  fetchTrailer: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    background: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

MovieDetails.defaultProps = {
  details: null,
  error: null,
};

export default withRouter(MovieDetails);
