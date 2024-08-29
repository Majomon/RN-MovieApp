import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { RootsStackParams } from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootsStackParams, 'Details'> {}

export const DetailScreen = ({route}: Props) => {
  /*   const params = useRoute<RouteProp<RootsStackParams, 'Product'>>().params; */

  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1}}>
      <Text>Details</Text>
      <Text>Prop: {route.params.movieId}</Text>
    </View>
  );
};
