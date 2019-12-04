import React, { useState, useEffect } from 'react';
import * as API from '../../services/fetchMovies';

const Movies = props => {
  const [searchValue, setSearchValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const { history, location } = props;

  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  const submitValue = e => {
    e.preventDefault();

    history.push(`?search=${searchValue}`);
    setSearchValue('');
  };

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('search');
    if (searchQuery) {
      const fetchParams = `&query=${searchQuery}`;
      const dataFetch = `search/movie/`;
      API.fetchMovieDB(dataFetch, fetchParams).then(({ data }) =>
        setSearchMovies([...data.results]),
      );
    }
  }, [location]);

  return (
    <>
      <form onSubmit={submitValue}>
        <input type="text" value={searchValue} onChange={handleChange} />
        <button type="submit">search movie</button>
      </form>
      {searchMovies && (
        <ul>
          {searchMovies.map(el => (
            <li key={el.id}>
              <h3>{el.title}</h3>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
