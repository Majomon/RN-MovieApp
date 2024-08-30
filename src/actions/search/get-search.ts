import {THE_MOVIE_DB_KEY} from '@env';
import axios from 'axios';
import {Movie} from '../../core/entities/movie.entity';
import {Search} from '../../presentation/interfaces/Search.interface';
import {SearchMovieMapper} from '../../presentation/mappers/searchMovie.mapper';

//EndPoint
const apiBaseUrl = 'https://api.themoviedb.org/3';
const searchEndPoint = `${apiBaseUrl}/search/movie?api_key=${THE_MOVIE_DB_KEY}`;

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

export const fetchSearch = async (value: string): Promise<Movie[]> => {
  const params = {
    query: value,
    include_adult: 'false',
    language: 'en-US',
    page: 1,
  };
  try {
    const {results,total_results} = await apiCall<Search>(searchEndPoint, params);
    const movieSearch = results.map(movie =>
      SearchMovieMapper.fromPersonMovieDBResultToEntity(movie),
    );
    return movieSearch;
  } catch (error) {
    console.error('Error fetching Search:', {error});
    throw new Error('Error al hacer el fetch de la película');
  }
};
