import {THE_MOVIE_DB_KEY} from '@env';
import axios from 'axios';
import {MovieDBMoviesResponse} from '../../presentation/interfaces/movie-db.responses';
import {MovieMapper} from '../../presentation/mappers/movie.mapper';

//EndPoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndPoint = `${apiBaseUrl}/trending/all/day?api_key=${THE_MOVIE_DB_KEY}`;
const topRatedMovieEndPoint = `${apiBaseUrl}/movie/top_rated?api_key=${THE_MOVIE_DB_KEY}`;
const upcomingMovieEndPoint = `${apiBaseUrl}/movie/upcoming?api_key=${THE_MOVIE_DB_KEY}`;

/* export const image500 = (path: string | null): string | null =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;

export const image342 = (path: string | null): string | null =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null;

export const image185 = (path: string | null): string | null =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : null;
 */
interface ApiCallParams {
  [key: string]: any;
}

const apiCall = async (endpoint: string, params?: ApiCallParams) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params || {},
  };

  try {
    const {data} = await axios.request<MovieDBMoviesResponse>(options);
    return data.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error al hacer el fetch de movies - NowPlaying');
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
