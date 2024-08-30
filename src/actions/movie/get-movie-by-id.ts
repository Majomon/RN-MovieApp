import {THE_MOVIE_DB_KEY} from '@env';
import axios from 'axios';
import {FullMovie, Movie} from '../../core/entities/movie.entity';
import {MovieMapper} from '../../presentation/mappers/movie.mapper';
import {MovieDBMovie} from '../../presentation/interfaces/movie-db.responses';

//EndPoint
const apiBaseUrl = 'https://api.themoviedb.org/3';
const movieDetailsEndPoint = (movieId: number) =>
  `${apiBaseUrl}/movie/${movieId}?api_key=${THE_MOVIE_DB_KEY}`;

interface ApiCallParams {
  [key: string]: any;
}

const apiCall = async <T>(
  endpoint: string,
  params?: ApiCallParams,
): Promise<T> => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params || {},
  };

  try {
    const {data} = await axios.request<T>(options);
    return data;
  } catch (error) {
    console.error('Error making API call:', error);
    throw new Error('Error al hacer el fetch');
  }
};

export const fetchMovieDetails = async (
  movieId: number,
): Promise<FullMovie> => {
  const endpoint = movieDetailsEndPoint(movieId);
  try {
    const data = await apiCall<MovieDBMovie>(endpoint);
    // Considera que el resultado puede ser un único objeto en lugar de una lista
    return MovieMapper.fromMovieDBToEntity(data);
  } catch (error) {
    console.error('Error fetching Movie ID:', error);
    throw new Error('Error al hacer el fetch de la película');
  }
};
