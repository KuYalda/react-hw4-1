import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movie/:id#cast" component={MovieDetails} />
        <Route path="/movie/:id#reviews" component={MovieDetails} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/movies" component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
