import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter, useLocation } from 'react-router-dom';

const Movies = ({ onSubmit, value, onChange, movies }) => {
  const location = useLocation();

  return (
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
};

Movies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(Movies);
