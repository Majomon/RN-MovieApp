import {ImageSourcePropType} from 'react-native';

export interface PropData {
  id: number;
  title: string;
  description: string;
  img: ImageSourcePropType;
}

export interface MovieCardProp {
  item: PropData;
  handleClick: () => void;
}

export interface Person {
  id: number;
  name: string;
  character: string;
}
