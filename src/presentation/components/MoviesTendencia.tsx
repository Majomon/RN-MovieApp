import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export const MoviesTendencia = ({data}: any) => {
  return (
    <View style={{marginBottom: 8}}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          marginHorizontal: 4,
          marginBottom: 5,
        }}>
        MoviesTendencia
      </Text>
      <Carousel
        data={data}
        renderItem={({item}) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={600}
        itemWidth={400}
        slideStyle={{display: 'flex'}}
      />
    </View>
  );
};

const MovieCard = ({item}: any) => {
  return (
    <View>
      <Text>Movie</Text>
    </View>
  );
};
