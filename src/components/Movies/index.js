import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({ onSubmit, value, onChange, movies }) => (
  <>
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">search movie</button>
    </form>
    {movies && (
      <ul>
        {movies.map(el => (
          <li key={el.id}>
            <Link to={`/movie/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    )}
  </>
);

export default Movies;
