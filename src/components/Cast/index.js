import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/fetchMovies';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    API.fetchCastDetails(id).then(({ data }) => setCast([...data.cast]));
  }, [id]);

  return (
    cast && (
      <section>
        <ul>
          {cast.map(el => (
            <li key={el.id}>{`${el.name} as ${el.character}`}</li>
          ))}
        </ul>
      </section>
    )
  );
};

export default Cast;
