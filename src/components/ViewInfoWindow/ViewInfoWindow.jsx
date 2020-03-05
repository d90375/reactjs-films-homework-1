import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import styles from './ViewInfoWindow.scss';

const ViewInfoWindow = ({
  film: {
    id, title, genres, rating, overview, poster,
  },
  switchViewInfo,
  fetchTrailer,
}) => (
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
      <Button color="primary" onClick={() => fetchTrailer(id)}>Watch Now</Button>
    </div>
  </div>
);

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
  fetchTrailer: PropTypes.func.isRequired,
};

export default ViewInfoWindow;
