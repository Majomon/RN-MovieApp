import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {PersonScreen} from '../screens/person/PersonScreen';
import {MovieScreen} from '../screens/detail/MovieScreen';

export type RootsStackParams = {
  Home: undefined;
  Movie: {movieId: number};
  Person: {person: {id: number; name: string; character: string}};
};

const Stack = createStackNavigator<RootsStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="Person" component={PersonScreen} />
    </Stack.Navigator>
  );
};
