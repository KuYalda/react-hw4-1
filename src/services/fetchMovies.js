import axios from 'axios';

const myKey = '?api_key=94fb68635853dc276658cb1ea38dd975';

const baseURL = 'https://api.themoviedb.org/3';

export const fetchMovieDB = async (
  data = '/trending/movie/day',
  query = '',
  url = baseURL,
  key = myKey,
) => {
  const getValue = await axios.get(url + data + key + query);
  return getValue;
};

export const nothing = () => {};
