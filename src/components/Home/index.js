import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../services/fetchMovies';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    // console.log('match :', props.match);
    API.fetchMovieDB().then(({ data }) => setTrendMovies([...data.results]));
    console.log('render :');
  }, []);

  return (
    console.log('trendMovies :', trendMovies) || (
      <>
        <h2>Popular today</h2>
        <ul>
          {trendMovies.map(el => (
            <li key={el.id}>
              <Link to={`/movie/${el.id}`}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default Home;
