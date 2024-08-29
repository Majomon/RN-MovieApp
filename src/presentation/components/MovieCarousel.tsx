import React, {useState} from 'react';
import {Dimensions, Pressable, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface PropData {
  title: string;
  description: string;
}

interface MovieCardProp {
  item: PropData;
}

export const MovieCarousel = () => {
  const width = Dimensions.get('window').width;
  const [trending, setTrending] = useState<PropData[]>([
    {title: 'Title1', description: 'Algo-1'},
    {title: 'Title2', description: 'Algo-2'},
    {title: 'Title3', description: 'Algo-3'},
  ]);

  return (
    <View style={{flex: 1}}>
      <Carousel
        loop
        autoPlay={true}
        data={trending}
        width={width}
        height={width - 40}
        mode="parallax"
        scrollAnimationDuration={1500}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item}) => <MovieCard item={item} />}
      />
    </View>
  );
};

const MovieCard = ({item}: MovieCardProp) => {
  return (
    <Pressable
      onPress={() => console.log(`Se clikeo el item ${item.title}`)}
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
