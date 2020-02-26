import React from 'react';
import Header from '../../components/Header';
import MoviesSection from '../../components/MoviesSection';

import styles from './MainPage.scss';

const MainPage = () => (
  <div className={styles.container}>
    <Header />
    <MoviesSection />
  </div>
);

export default MainPage;