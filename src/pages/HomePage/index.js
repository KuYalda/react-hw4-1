import React, { useState, useEffect } from 'react';
import Home from '../../components/Home';
import * as API from '../../services/fetchMovies';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovies().then(({ data }) =>
      setTrendMovies([...data.results]),
    );
  }, []);

  return trendMovies && <Home movies={trendMovies} />;
};

export default HomePage;
