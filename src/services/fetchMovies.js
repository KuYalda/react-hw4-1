import axios from 'axios';

const myKey = '?api_key=94fb68635853dc276658cb1ea38dd975';

const baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = () => {
  return axios.get(`${baseURL}/trending/movie/day${myKey}`);
};

export const fetchSerchMovie = searchQuery => {
  return axios.get(`${baseURL}/search/movie${myKey}&query=${searchQuery}`);
};

export const fetchMovieDetails = id => {
  return axios.get(`${baseURL}/movie/${id}${myKey}`);
};

export const fetchCastDetails = id => {
  return axios.get(`${baseURL}/movie/${id}/credits${myKey}`);
};

export const fetchReviewsDetail = id => {
  return axios.get(`${baseURL}/movie/${id}/reviews${myKey}`);
};
