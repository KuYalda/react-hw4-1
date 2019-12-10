import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ id, title }) => (
  <li>
    <Link to={`/movie/${id}`}>{title}</Link>
  </li>
);

export default Home;
