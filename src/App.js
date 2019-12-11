import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "homePage" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "moviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "moviesDetailsPage" */
  ),
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/movie/:id" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
