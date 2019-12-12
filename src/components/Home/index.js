import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const Home = ({ movies, location }) => (
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

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withRouter(Home);
