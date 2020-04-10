import MainPage from './pages/MainPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const routes = [
  {
    path: '/details/:id',
    component: MovieDetailsPage,
  },
  {
    path: '/',
    component: MainPage,
  },
];

export default routes;
