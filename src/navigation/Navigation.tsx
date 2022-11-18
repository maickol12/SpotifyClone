import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarStyle:{
          backgroundColor:'transparent',
          position:'absolute'
        }
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Your Library" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default Navigation;