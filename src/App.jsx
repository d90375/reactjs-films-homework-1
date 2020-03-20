import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import MainPage from './pages/MainPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
import routes from './routes';

import styles from './main.scss';

const App = () => (
  <div className={styles.app}>
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  </div>
);

export default App;
