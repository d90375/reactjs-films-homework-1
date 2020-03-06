import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WatchNowWindow from '../WatchNowWindow';
import ViewInfoWindow from '../ViewInfoWindow';

import styles from './MovieItem.scss';

class MovieItem extends Component {
  state = {
    isInfoOpen: false,
  };

  switchViewInfo = () => {
    this.setState(({ isInfoOpen }) => ({
      isInfoOpen: !isInfoOpen,
    }));
  }


  render() {
    const { film, fetchTrailer } = this.props;
    const { isInfoOpen } = this.state;

    const {
      poster, title, genres, rating,
    } = film;

    return (
      <div className={styles.container}>
        <div className={styles.preview}>
          <img className={styles.poster} src={poster} alt="poster" />
          <div className={styles.info}>
            <h3 className={styles.title}>
              {title.length < 15 ? title : `${title.substring(0, 13)}...`}
            </h3>
            <p className={styles.rating}>{rating}</p>
            <p className={styles.genres}>{genres}</p>
          </div>
        </div>
        <WatchNowWindow
          name="watch"
          film={film}
          switchViewInfo={this.switchViewInfo}
          fetchTrailer={fetchTrailer}
        />
        { isInfoOpen
          ? (
            <ViewInfoWindow
              film={film}
              switchViewInfo={this.switchViewInfo}
              fetchTrailer={fetchTrailer}
            />
          )
          : null }
      </div>
    );
  }
}

MovieItem.propTypes = {
  film: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  fetchTrailer: PropTypes.func.isRequired,
};

export default MovieItem;
