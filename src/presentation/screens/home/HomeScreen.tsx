import React, {useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {IonIcon} from '../../components';
import {globalColors} from '../../theme/theme';
import { MovieCarousel } from '../../components/MovieCarousel';


export const HomeScreen = () => {


  return (
    <View style={styles.container}>
      {/* Search y Logo */}
      <View style={{marginVertical: 10}}>
        <View style={styles.menuTop}>
          <IonIcon name="menu-outline" size={30} color="white" />
          <Text style={styles.text}>
            <Text style={{color: globalColors.text}}>M</Text>ovies
          </Text>
          <Pressable>
            <IonIcon name="search-outline" size={30} color="white" />
          </Pressable>
        </View>
      </View>
      {/* Movies tendencia */}
      <MovieCarousel/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  menuTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
