import React, { useState, useEffect, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails';
import * as API from '../../services/fetchMovies';

const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "castPage" */),
);

const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName: "reviewsPage" */),
);

const MovieDetailsPage = ({ history, location, match }) => {
  const [movie, setMovie] = useState([]);
  const [from, setFrom] = useState(undefined);
  const { id } = match.params;
  const { state } = location;

  useEffect(() => {
    if (!state) {
      setFrom('/');
    } else {
      setFrom(state.from);
    }
    API.fetchMovieDetails(id).then(({ data }) => setMovie({ ...data }));
  }, [id, state]);

  const handleClick = () => {
    history.push(from);
  };

  return (
    <>
      <MovieDetails
        img={movie.poster_path}
        title={movie.original_title}
        date={movie.release_date}
        overview={movie.overview}
        genres={movie.genres}
        id={movie.id}
        onClick={handleClick}
      />
      <Route path={`${match.path}/cast`} component={Cast} />
      <Route path={`${match.path}/reviews`} component={Reviews} />
    </>
  );
};

MovieDetailsPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.objectOf(PropTypes.objectOf(PropTypes.objectOf()))
    .isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
  }).isRequired,
};

export default MovieDetailsPage;
