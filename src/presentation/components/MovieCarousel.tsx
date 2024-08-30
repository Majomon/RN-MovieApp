import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, Pressable, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Movie} from '../../core/entities/movie.entity';
import {MovieCardProp} from '../interfaces/Interfaces';
import {RootsStackParams} from '../navigation/StackNavigator';

interface Props {
  movies: Movie[];
}

const {width, height} = Dimensions.get('window');

export const MovieCarousel = ({movies}: Props) => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();

  const handleClick = (id: number) => {
    navigation.navigate('Movie', {movieId: id});
  };

  return (
    <View style={{height: width - 20}}>
      <Carousel
        loop
        autoPlay={true}
        data={movies}
        width={width}
        height={height / 2.1}
        mode="parallax"
        scrollAnimationDuration={1500}
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={() => handleClick(item.id)} />
        )}
      />
    </View>
  );
};

const MovieCard = ({item, handleClick}: MovieCardProp) => {
  return (
    <Pressable
      onPress={handleClick}
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
      }}>
      <Image
        source={{uri: item.poster}}
        style={{
          width: width,
          height: height * 0.5,
          borderRadius: 10,
        }}
        resizeMode="stretch"
      />
    </Pressable>
  );
};
