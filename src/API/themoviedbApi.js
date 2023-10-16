import axios from 'axios';

export async function fetchMovies(params, query) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '83c7fa62ddc3adeb807030d6ee731236';

  return await axios.get(
    `${BASE_URL}${params}?api_key=${API_KEY}&${query}&language=en-US`
  );
}
