import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button';

import styles from './ViewInfoWindow.scss';

class ViewInfoWindow extends Component {
  handleClick = () => {
    const { film: { id }, fetchMovie } = this.props;
    fetchMovie(id);
  };

  render() {
    const {
      film: {
        title, genres, rating, overview, poster,
      }, switchViewInfo,
    } = this.props;

    return (
      <div className={styles.container}>
        <img className={styles.poster} src={poster} alt="poster" />
        <div className={styles.wrapper}>
          <button className={styles.close} type="button" onClick={switchViewInfo}>&#215;</button>
          <div className={styles.info}>
            <h3 className={styles.title}>
              {title.length < 18 ? title : `${title.substring(0, 15)}...`}
            </h3>
            <p className={styles.rating}>{rating}</p>
            <p className={styles.genres}>{genres}</p>
          </div>
          <p className={styles.overview}>{overview}</p>
          <Button color="primary" onClick={this.handleClick}>Watch Now</Button>
        </div>
      </div>
    );
  }
}

ViewInfoWindow.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genres: PropTypes.string,
    rating: PropTypes.number,
    overview: PropTypes.string,
    poster: PropTypes.string,
  }).isRequired,
  switchViewInfo: PropTypes.func.isRequired,
  fetchMovie: PropTypes.func.isRequired,
};

export default ViewInfoWindow;
