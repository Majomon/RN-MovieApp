import {Movie} from '../../core/entities/movie.entity';
import type {ResultSearch} from '../interfaces/Search.interface';

export class SearchMovieMapper {
  static fromPersonMovieDBResultToEntity(result: ResultSearch): Movie {
    return {
      id: result.id,
      title: result.title!,
      description: result.overview,
      releaseDate: new Date(result.release_date!),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }
}