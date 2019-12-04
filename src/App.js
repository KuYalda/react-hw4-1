import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <>
      <h1>App</h1>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies" component={Movies} />
      </Switch>
    </>
  );
};

export default App;
