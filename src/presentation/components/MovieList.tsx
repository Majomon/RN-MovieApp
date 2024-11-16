import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {MovieUpcomingProps} from '../interfaces/Interfaces';
import {RootsStackParams} from '../navigation/StackNavigator';
import {globalColors} from '../theme/theme';

export const MovieList = ({movies, title, hideSeeAll}: MovieUpcomingProps) => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();
  const {width, height} = Dimensions.get('window');

  const handleClick = (id: number) => {
    navigation.navigate('Movie', {movieId: id});
  };

  return (
    <View style={{marginVertical: 6}}>
      <View
        style={{
          marginHorizontal: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>{title}</Text>
        {!hideSeeAll && (
          <Pressable>
            <Text style={{color: globalColors.text}}>Ver todo</Text>
          </Pressable>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          gap: 30,
        }}>
        {movies.map((item, index) => {
          return (
            <Pressable key={index} onPress={() => handleClick(item.id)}>
              <Image
                source={{uri: item.poster}}
                style={{
                  width: width * 0.35,
                  height: height * 0.22,
                  borderRadius: 16,
                }}
              />
              <Text style={{color: 'white'}}>
                {item.title.length > 14
                  ? item.title.slice(0, 14) + '...'
                  : item.title}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};
