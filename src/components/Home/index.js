import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter, useLocation } from 'react-router-dom';

const Home = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <h2>Popular today</h2>
      <ul>
        {movies.map(el => (
          <li key={el.id}>
            <Link
              to={{
                pathname: `/movie/${el.id}`,
                state: { from: location },
              }}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(Home);
