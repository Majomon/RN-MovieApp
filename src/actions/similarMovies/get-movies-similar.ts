import {THE_MOVIE_DB_KEY} from '@env';
import axios from 'axios';
import {Movie} from '../../core/entities/movie.entity';
import {MovieDBMoviesResponse} from '../../presentation/interfaces/movie-db.responses';
import {MovieMapper} from '../../presentation/mappers/movie.mapper';

//EndPoint
const apiBaseUrl = 'https://api.themoviedb.org/3';
const movieDetailsEndPoint = (movieId: number) =>
  `${apiBaseUrl}/movie/${movieId}/similar?api_key=${THE_MOVIE_DB_KEY}`;

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

export const fetchMovieSimilar = async (movieId: number): Promise<Movie[]> => {
  const endpoint = movieDetailsEndPoint(movieId);
  try {
    const {results} = await apiCall<MovieDBMoviesResponse>(endpoint);

    const movies = results.map(movie =>
      MovieMapper.fromMovieDBResultToEntity(movie),
    );
    return movies;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw new Error('Error al hacer el fetch de la película');
  }
};
