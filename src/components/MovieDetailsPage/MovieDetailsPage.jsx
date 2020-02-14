import React from 'react';
import MovieDetailsInfo from '../MovieDetailsInfo';
import MovieDetailsDescription from '../MovieDetailsDescription';
import MovieDetailsRating from '../MovieDetailsRating';
import MovieDetailsButtons from '../MovieDetailsButtons';

import styles from './movieDetailsPage.scss';

const data = {
  title: 'The Jungle Book',
  genres: ['Adventure', 'Drama', 'Family', 'Fantasy'],
  duration: '1h 46m',
  description: `There are growing dangers in the wizarding world of 1926 New York.  
                Something mysterious is leaving a path of destruction in the streets, 
                threatening to expose the wizarding`,
  rating: '4.8',
};

const MovieDetailsPage = () => {
  const { description, rating, ...info } = data;

  return (
    <section className={styles.movieDetailsPage}>
      <div className={styles.info}>
        <MovieDetailsInfo info={info} />
        <MovieDetailsDescription description={description} />
      </div>
      <div className={styles.info}>
        <MovieDetailsRating rating={rating} />
        <MovieDetailsButtons />
      </div>

    </section>
  );
};

export default MovieDetailsPage;
