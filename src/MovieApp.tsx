import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SideMenuNavigator } from './presentation/navigation/SideMenuNavigator';
import { StackNavigator } from './presentation/navigation/StackNavigator';

export const MovieApp = () => {
  return (
    <NavigationContainer>
      {/* <SideMenuNavigator /> */}
      <StackNavigator/>
    </NavigationContainer>
  );
};
