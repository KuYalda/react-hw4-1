import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Movies = ({ onSubmit, value, onChange, movies, location }) => (
  <>
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">search movie</button>
    </form>
    {movies && (
      <ul>
        {movies.map(el => (
          <li key={el.id}>
            <Link
              to={{
                pathname: `/movie/${el.id}`,
                state: { from: { ...location } },
              }}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </>
);

export default withRouter(Movies);
