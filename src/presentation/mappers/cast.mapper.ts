import {Cast} from '../../core/entities/cast.entity';
import type {MovieDBCast} from '../interfaces/movie-db.responses';

export class CastMapper {
  static fromMovieDBCastEntity(actor: MovieDBCast): Cast {
    return {
      id: actor.id,
      name: actor.original_name,
      character: actor.character ?? 'No character',
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
