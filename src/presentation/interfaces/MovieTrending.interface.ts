export interface MovieTrending {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  backdrop_path: string;
  id: number;
  name?: string;
  original_name?: string;
  overview: string;
  poster_path: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: Date;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
  title?: string;
  original_title?: string;
  release_date?: Date;
  video?: boolean;
}

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}
