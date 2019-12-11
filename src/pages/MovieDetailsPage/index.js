import React, { useState, useEffect, lazy } from 'react';
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
  const { id } = match.params;

  useEffect(() => {
    API.fetchMovieDetails(id).then(({ data }) => setMovie({ ...data }));
  }, [id]);

  const handleClick = () => {
    if (history.length === 1 || !location.state) {
      return history.push('/');
    }
    return history.push(location.state.from);
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

export default MovieDetailsPage;
