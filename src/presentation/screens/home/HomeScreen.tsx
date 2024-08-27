import React from 'react';
import {Text, View} from 'react-native';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';

export const HomeScreen = () => {
  return (
    <View>
      <HamburguerMenu />
      <Text>HomeScreen</Text>
    </View>
  );
};
