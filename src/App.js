import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id#cast" component={MovieDetails} />
        <Route path="/movie/:id#reviews" component={MovieDetails} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/movies" component={Movies} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
