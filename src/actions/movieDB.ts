import axios from 'axios';
import {THE_MOVIE_DB_KEY} from '@env';

//EndPoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndPoint = `${apiBaseUrl}/trending/all/day?api_key=${THE_MOVIE_DB_KEY}`;
const upcomingMovieEndPoint = `${apiBaseUrl}/movie/upcoming?api_key=${THE_MOVIE_DB_KEY}`;
const topRatedMovieEndPoint = `${apiBaseUrl}/movie/top_rated?api_key=${THE_MOVIE_DB_KEY}`;

interface ApiCallParams {
  [key: string]: any; // Define it as key-value pair to allow optional parameters
}

const apiCall = async (endpoint: string, params?: ApiCallParams) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params || {},
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.log({error});
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndPoint);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMovieEndPoint);
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMovieEndPoint);
};
