import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/fetchMovies';
import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    API.fetchReviewsDetail(id).then(({ data }) =>
      setReviews([...data.results]),
    );
  }, [id]);

  return (
    reviews &&
    reviews.map(el => (
      <blockquote className={s.blockquote} key={el.id}>
        <cite className={s.blockquote_cite}>{el.author}</cite>
        <p className={s.blockquote_p}>{el.content}</p>
      </blockquote>
    ))
  );
};

export default Reviews;
