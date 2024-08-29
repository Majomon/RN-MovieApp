import React, {useState} from 'react';
import {Dimensions, Pressable, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {MovieCardProp, PropData} from '../interfaces/Interfaces';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootsStackParams} from '../navigation/StackNavigator';

interface Props {
  data: PropData[];
}

export const MovieCarousel = ({data}: Props) => {
  const {width} = Dimensions.get('window');

  const navigation = useNavigation<NavigationProp<RootsStackParams>>();

  const handleClick = (id: number) => {
    navigation.navigate('Details', {movieId: id});
  };

  return (
    <View style={{height: width - 60}}>
      <Carousel
        loop
        autoPlay={true}
        data={data}
        width={width}
        height={width - 60}
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
        backgroundColor: 'red',
        borderRadius: 4,
      }}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>{item.title}</Text>
    </Pressable>
  );
};
