export const GET_MOVIES = 'GET_MOVIES';
import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'df767e8c766f02f9ed529f7fede7d3da';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};