import { Person } from '../../core/entities/person.entity';
import type { PersonResponse } from '../interfaces/Person.interface';

export class PersonMapper {
  static fromPerdonDBEntity(actor: PersonResponse): Person {
    return {
      id: actor.id,
      name: actor.name,
      place_of_birth: actor.place_of_birth,
      gender: actor.gender,
      birthday: actor.birthday,
      know_for: actor.known_for_department,
      popularity: actor.popularity,
      biography: actor.biography,
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
