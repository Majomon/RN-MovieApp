import {THE_MOVIE_DB_KEY} from '@env';
import axios from 'axios';
import {Movie} from '../../core/entities/movie.entity';
import {PersonMovie} from '../../presentation/interfaces/PersonMovies.interface';
import {PersonMovieMapper} from '../../presentation/mappers/personMovie.mapper';

//EndPoint
const apiBaseUrl = 'https://api.themoviedb.org/3';
const movieDetailsEndPoint = (personId: number) =>
  `${apiBaseUrl}/person/${personId}/movie_credits?api_key=${THE_MOVIE_DB_KEY}`;

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

export const fetchPersonMovie = async (personId: number): Promise<Movie[]> => {
  const endpoint = movieDetailsEndPoint(personId);
  try {
    const {cast} = await apiCall<PersonMovie>(endpoint);

    const actors = cast.map(personMovie =>
      PersonMovieMapper.fromPersonMovieDBResultToEntity(personMovie),
    );
    return actors;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw new Error('Error al hacer el fetch de la película');
  }
};
