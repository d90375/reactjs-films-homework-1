import MainPage from './pages/MainPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const routes = [
  {
    path: '/details/:id',
    component: MovieDetailsPage,
  },
  /*  {
    path: '/search/:query',
    component: MainPage,
  },
  {
    path: '/genre/:genreId',
    component: MainPage,
  },
  {
    path: '/:filter',
    component: MainPage,
  }, */
  {
    path: '/',
    component: MainPage,
  },
];

export default routes;
