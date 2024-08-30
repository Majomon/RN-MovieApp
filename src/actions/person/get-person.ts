import { THE_MOVIE_DB_KEY } from '@env';
import axios from 'axios';
import { Person } from '../../core/entities/person.entity';
import { PersonResponse } from '../../presentation/interfaces/Person.interface';
import { PersonMapper } from '../../presentation/mappers/person.mapper';

//EndPoint
const apiBaseUrl = 'https://api.themoviedb.org/3';
const movieDetailsEndPoint = (personId: number) =>
  `${apiBaseUrl}/person/${personId}?api_key=${THE_MOVIE_DB_KEY}`;

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

export const fetchPersonDetail = async (personId: number): Promise<Person> => {
  const endpoint = movieDetailsEndPoint(personId);
  try {
    const data = await apiCall<PersonResponse>(endpoint);
    const person = PersonMapper.fromPerdonDBEntity(data);
    return person;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw new Error('Error al hacer el fetch de la película');
  }
};
