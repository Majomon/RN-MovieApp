import {Movie} from '../../core/entities/movie.entity';

export interface MovieCardProp {
  item: Movie;
  handleClick: () => void;
}

export interface MovieUpcomingProps {
  movies: Movie[];
  title: string;
  hideSeeAll?: boolean;
}

export interface Person {
  id: number;
  name: string;
  character: string;
}
