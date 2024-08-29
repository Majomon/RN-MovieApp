import React, {useState} from 'react';
import {Dimensions, Image, Pressable, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {MovieCardProp, PropData} from '../interfaces/Interfaces';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootsStackParams} from '../navigation/StackNavigator';

interface Props {
  data: PropData[];
}

const {width, height} = Dimensions.get('window');

export const MovieCarousel = ({data}: Props) => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();

  const handleClick = (id: number) => {
    navigation.navigate('Details', {movieId: id});
  };

  return (
    <View style={{height: width - 20}}>
      <Carousel
        loop
        autoPlay={true}
        data={data}
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
        source={item.img}
        style={{
          width: width ,
          height: height * 0.5,
          borderRadius: 10,
        }}
        resizeMode="cover" // Ajusta el modo de redimensionamiento según tus necesidades
      />
    </Pressable>
  );
};
