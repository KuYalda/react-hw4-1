import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

MoviesPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.func).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MoviesPage;
