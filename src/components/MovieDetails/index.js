import React, { useState, useEffect } from 'react';
import * as API from '../../services/fetchMovies';

const MovieDetails = props => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    const fetchData = `movie/${id}`;
    API.fetchMovieDB(fetchData).then(({ data }) => {
      setMovie({ ...data });
    });
  }, [props.match.params]);
  return console.log('movie :', movie) || <h3>{movie.overview}</h3>;
};

export default MovieDetails;
