import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import GratitudeJarScreen from './src/screens/GratitudeJarScreens/GratitudeJarScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GratitudeJar" component={GratitudeJarScreen} options={{ title: 'Gratitude Jar' }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
