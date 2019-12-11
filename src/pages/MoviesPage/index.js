import React, { useState, useEffect } from 'react';
import Movies from '../../components/Movies';
import * as API from '../../services/fetchMovies';

const MoviesPage = ({ history, location }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  const submitValue = e => {
    e.preventDefault();

    history.push(`?query=${searchValue}`);
    setSearchValue('');
  };

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('query');
    if (searchQuery) {
      API.fetchSerchMovie(searchQuery).then(({ data }) =>
        setSearchMovies([...data.results]),
      );
    }
  }, [location]);

  return (
    <Movies
      onSubmit={submitValue}
      value={searchValue}
      onChange={handleChange}
      movies={searchMovies}
    />
  );
};

export default MoviesPage;
