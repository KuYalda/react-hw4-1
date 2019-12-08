import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

    history.push(`?query=${searchValue}`);
    setSearchValue('');
  };

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('query');
    if (searchQuery) {
      const fetchQuery = `&query=${searchQuery}`;
      const fetchData = `/search/movie/`;
      API.fetchMovieDB(fetchData, fetchQuery).then(({ data }) =>
        setSearchMovies([...data.results]),
      );
    }
  }, [location]);

  return (
    console.log('searchMovies :', searchMovies) || (
      <>
        <form onSubmit={submitValue}>
          <input type="text" value={searchValue} onChange={handleChange} />
          <button type="submit">search movie</button>
        </form>
        {searchMovies && (
          <ul>
            {searchMovies.map(el => (
              <li key={el.id}>
                <Link to={`/movie/${el.id}`}>{el.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    )
  );
};

export default Movies;
