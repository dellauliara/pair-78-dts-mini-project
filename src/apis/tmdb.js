import axios from 'axios';

const API_KEY = 'b8c434ae09d0c63b0c568c7156a86b9a';
//const API_KEY = process.env.REACT_APP_TMDB_KEY;

const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
