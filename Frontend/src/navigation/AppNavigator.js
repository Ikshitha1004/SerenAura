
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import GratitudeJarScreen from '../screens/GratitudeJarScreens/GratitudeJarScreen';
import CommunityScreen from '../screens/Community/index';
import ProfileScreen from '../screens/Profile/ProfilePage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="GratitudeJar" component={ProfileScreen} options={{ title: 'Comunity' }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
