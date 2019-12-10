import React, { useState, useEffect } from 'react';
import Home from '../../components/Home';
import * as API from '../../services/fetchMovies';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    // console.log('match :', props.match);
    API.fetchMovieDB().then(({ data }) => setTrendMovies([...data.results]));
    console.log('render :');
  }, []);

  return (
    trendMovies && (
      <>
        <h2>Popular today</h2>
        <ul>
          {trendMovies.map(el => (
            <Home id={el.id} title={el.title} key={el.id} />
          ))}
        </ul>
      </>
    )
  );
};

export default HomePage;
