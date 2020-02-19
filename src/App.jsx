import React from 'react';
import Header from './components/Header';
import MovieDetails from './components/MovieDetails';

import styles from './main.scss';

const App = () => (
  <div className={styles.app}>
    <Header />
    <MovieDetails />
  </div>
);

export default App;
