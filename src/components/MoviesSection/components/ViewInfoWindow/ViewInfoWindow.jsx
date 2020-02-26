import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button';

import styles from './ViewInfoWindow.scss';

const ViewInfoWindow = ({
  film: {
    title, genres, rating, overview,
  },
}) => (
  <div className={styles.container}>
    <button className={styles.close} type="button">&#215;</button>
    <div className={styles.info}>
      <h3 className={styles.title}>
        {title.length < 18 ? title : `${title.substring(0, 15)}...`}
      </h3>
      <p className={styles.rating}>{rating}</p>
      <p className={styles.genres}>{genres}</p>
    </div>
    <p className={styles.overview}>{overview}</p>
    <Button color="primary">Watch Now</Button>
  </div>
);

ViewInfoWindow.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    genres: PropTypes.string,
    rating: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};

export default ViewInfoWindow;
