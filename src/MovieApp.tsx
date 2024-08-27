import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DrawerNavigation } from './presentation/navigation/DrawerNavigation';
import { HomeScreen } from './presentation/screens/home/HomeScreen';
import { BottomTabNavigator } from './presentation/navigation/BottomTabNavigator';

export const MovieApp = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
      {/* <HomeScreen/> */}
      {/* <BottomTabNavigator/> */}
    </NavigationContainer>
  );
};
