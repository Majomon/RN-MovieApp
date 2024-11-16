import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../screens/home/HomeScreen';
import {BottomTabNavigator} from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
