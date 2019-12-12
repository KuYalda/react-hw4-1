import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './MovieDetails.module.css';

const MovieDetails = ({ img, title, date, overview, genres, id, onClick }) => (
  <>
    <button type="button" className={s.button_back} onClick={onClick}>
      Go back
    </button>
    <section className={s.movie_section}>
      <div>
        <img
          src={`http://image.tmdb.org/t/p/w780${img}`}
          width={300}
          heigth={500}
          alt="foto"
          className={s.img}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>Release: {date}</p>
        <p>{overview}</p>
        {genres &&
          genres.map(el => (
            <span key={el.id} className={s.genres}>
              {el.name}
            </span>
          ))}
      </div>
    </section>
    <section className={s.section_more}>
      <h3 className={s.header}>More Info</h3>
      <ul className={s.nav}>
        <li>
          <Link to={`/movie/${id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movie/${id}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </section>
  </>
);

MovieDetails.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf().isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieDetails;
