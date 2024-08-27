import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/home/HomeScreen';
import { BottomTabNavigator } from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
