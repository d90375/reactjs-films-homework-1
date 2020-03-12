import React from 'react';
import Header from '../../containers/Header';
import MovieDetails from '../../containers/MovieDetails';
import MoviesSection from '../../containers/MoviesSection';
import Footer from '../../components/Footer';

const MainPage = () => (
  <div>
    <Header />
    <MovieDetails />
    <MoviesSection />
    <Footer />
  </div>
);

export default MainPage;
