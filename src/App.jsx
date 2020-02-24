import React from 'react';
import Header from './components/Header';
import MovieDetails from './components/MovieDetails';

import styles from './main.scss';

const data = {
  title: 'The Jungle Book',
  genres: 'Adventure, Drama, Family, Fantasy',
  duration: '1h 46m',
  description: `There are growing dangers in the wizarding world of 1926 New York.  
                Something mysterious is leaving a path of destruction in the streets, 
                threatening to expose the wizarding`,
  rating: 4.8,
};

const App = () => (
  <div className={styles.app}>
    <Header />
    <MovieDetails data={data} />
  </div>
);

export default App;
