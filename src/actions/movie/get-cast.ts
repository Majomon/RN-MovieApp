import {THE_MOVIE_DB_KEY} from '@env';
import axios from 'axios';
import {Movie} from '../../core/entities/movie.entity';
import {MovieDBCastResponse} from '../../presentation/interfaces/movie-db.responses';
import {CastMapper} from '../../presentation/mappers/cast.mapper';
import {Cast} from '../../core/entities/cast.entity';

//EndPoint
const apiBaseUrl = 'https://api.themoviedb.org/3';
const movieDetailsEndPoint = (movieId: number) =>
  `${apiBaseUrl}/movie/${movieId}/credits?api_key=${THE_MOVIE_DB_KEY}`;

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

export const fetchMovieCast = async (movieId: number): Promise<Cast[]> => {
  const endpoint = movieDetailsEndPoint(movieId);
  try {
    const {cast} = await apiCall<MovieDBCastResponse>(endpoint);
    // Considera que el resultado puede ser un único objeto en lugar de una lista
    const actors = cast.map(actor => CastMapper.fromMovieDBCastEntity(actor));
    return actors;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw new Error('Error al hacer el fetch de la película');
  }
};
