import React from 'react';
import MovieDetailsInfo from '../MovieDetailsInfo';
import MovieDetailsDescription from '../MovieDetailsDescription';

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
  const {
    title, duration, description, rating,
  } = data;
  const genres = data.genres.join(' ');

  return (
    <section className={styles.movieDetailsPage}>
      <div className={styles.info}>
        <MovieDetailsInfo title={title} genres={genres} duration={duration} />
        <MovieDetailsDescription description={description} />
      </div>
    </section>
  );
};

export default MovieDetailsPage;
