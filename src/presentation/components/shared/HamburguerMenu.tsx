import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable} from 'react-native';
import {IonIcon} from './IonIcon';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 5}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="menu-outline" color="black" size={30} />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
