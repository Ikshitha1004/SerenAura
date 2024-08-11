
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import GratitudeJarScreen from '../screens/GratitudeJarScreens/GratitudeJarScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="GratitudeJar" component={GratitudeJarScreen} options={{ title: 'Gratitude Jar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
