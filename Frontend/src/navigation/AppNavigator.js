import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import GratitudeJarScreen from '../screens/GratitudeJarScreens/GratitudeJarScreen';
import CommunityScreen from '../screens/Community/index';
import ProfileScreen from '../screens/Profile/ProfilePage';
// import SignUp from "../screens/LogScreens/SignUp";
// import Login from "../screens/LogScreens/LoginScreen";
import DashboardScreen from '../screens/Dashboard/Dashboard';
import SleepTracker from '../screens/Profile/SleepTracker';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Profile' >
          <Stack.Screen
          name="GratitudeJar"
          component={SleepTracker}
          options={{ title: "Gratitude Jar" }}
          />
          {/* <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />  */}
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;