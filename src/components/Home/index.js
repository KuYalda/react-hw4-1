import React from 'react';
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

export default withRouter(Home);
