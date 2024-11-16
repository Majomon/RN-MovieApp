import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';

const {width, height} = Dimensions.get('window');

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Progress.CircleSnail thickness={12} size={160} color="yellow" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
  },
});
