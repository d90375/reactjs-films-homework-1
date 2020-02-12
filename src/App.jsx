import React from 'react';
import Header from './components/Header';
import MovieDetailsPage from './components/MovieDetailsPage';

import styles from './main.scss';

const App = () => (
  <div className={styles.app}>
    <Header />
    <MovieDetailsPage />
  </div>
);

export default App;
