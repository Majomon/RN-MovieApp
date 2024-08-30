import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {RootsStackParams} from '../navigation/StackNavigator';
import {Cast} from '../../core/entities/cast.entity';

interface Props {
  cast: Cast[];
}

export const MovieCast = ({cast}: Props) => {
  const navigation = useNavigation<NavigationProp<RootsStackParams>>();

  return (
    <View style={{marginHorizontal: 10, marginVertical: 10}}>
      <Text
        style={{
          fontSize: 18,
          marginHorizontal: 4,
          marginBottom: 6,
          color: 'white',
        }}>
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {cast &&
          cast.map((person, index) => {
            return (
              <Pressable
                key={index}
                style={{marginRight: 16, alignItems: 'center'}}
                onPress={() => navigation.navigate('Person', {person})}>
                <View
                  style={{
                    overflow: 'hidden',
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: '#a7a1a1',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{borderRadius: 16, width: 80, height: 96}}
                    source={{
                      uri:
                        person.avatar ||
                        require('../../assets/fallbackPersonImage.png'),
                    }}
                    resizeMode="cover"
                  />
                </View>
                <Text style={{fontSize: 12, color: 'white', marginTop: 4}}>
                  {person.character.length > 10
                    ? person.character.slice(0, 10) + '...'
                    : person.character}
                </Text>
                <Text style={{fontSize: 12, color: 'white', marginTop: 4}}>
                  {person.name.length > 10
                    ? person.name.slice(0, 10) + '...'
                    : person.name}
                </Text>
              </Pressable>
            );
          })}
      </ScrollView>
    </View>
  );
};
