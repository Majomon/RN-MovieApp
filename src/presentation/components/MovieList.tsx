import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {PropData} from '../interfaces/Interfaces';
import {globalColors} from '../theme/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootsStackParams} from '../navigation/StackNavigator';

interface Props {
  data: PropData[];
  title: string;
}

export const MovieList = ({data, title}: Props) => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();
  const {width, height} = Dimensions.get('window');

  const handleClick = (id: number) => {
    navigation.navigate('Details', {movieId: id});
  };

  return (
    <View style={{marginBottom: 4}}>
      <View
        style={{
          marginHorizontal: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>{title}</Text>
        <Pressable>
          <Text style={{color: globalColors.text}}>Ver todo</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          gap: 30,
        }}>
        {data.map((item, index) => {
          return (
            <Pressable key={index} onPress={() => handleClick(item.id)}>
              <Image
                source={item.img}
                style={{
                  width: width * 0.35,
                  height: height * 0.22,
                  borderRadius: 4,
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
