import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import * as API from '../../services/fetchMovies';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { hash } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = `/movie/${id}`;
    API.fetchMovieDB(fetchData).then(({ data }) => {
      setMovie({ ...data });
    });
    if (hash === '#cast') {
      API.fetchMovieDB(`${fetchData}/credits`).then(({ data }) =>
        console.log('data :', data.cast),
      );
    } else if (hash === '#reviews') {
      API.fetchMovieDB(`${fetchData}/reviews`).then(({ data }) =>
        console.log('data :', data.results),
      );
    }
  }, [id, hash]);

  return (
    movie && (
      <>
        <button type="button" className={s.button_back}>
          Go back
        </button>
        <section className={s.movie_section}>
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w780${movie.poster_path}`}
              width={300}
              heigth={500}
              alt="foto"
              className={s.img}
            />
          </div>
          <div>
            <h3>{movie.original_title}</h3>
            <p>Release: {movie.release_date}</p>
            <p>{movie.overview}</p>
            {movie.genres &&
              movie.genres.map(el => (
                <span key={el.id} className={s.genres}>
                  {el.name}
                </span>
              ))}
          </div>
        </section>
        <section className={s.section_more}>
          <h3>More Info</h3>
          <ul>
            <li>
              <Link to={`/movie/${movie.id}#cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movie/${movie.id}#reviews`}>Reviews</Link>
            </li>
          </ul>
          {hash && <p>HASH</p>}
        </section>
      </>
    )
  );
};

export default MovieDetails;
