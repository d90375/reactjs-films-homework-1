import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

import styles from './main.scss';

const App = () => (
  <Router>
    <div className={styles.app}>
      <Switch>
        <Route path="/details/:id">
          <MovieDetailsPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
