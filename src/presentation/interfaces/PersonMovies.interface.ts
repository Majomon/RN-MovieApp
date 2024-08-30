export interface PersonMovie {
  id: number;
  cast: PersonCastMovie[];
  crew: any[];
}

export interface PersonCastMovie {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  character: string;
  credit_id: string;
  order: number;
}

export enum OriginalLanguage {
  En = 'en',
}
