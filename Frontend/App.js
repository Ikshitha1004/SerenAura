import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GratitudeJarScreen from './src/screens/GratitudeJarScreens/GratitudeJarScreen';
// Import other screens...

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GratitudeJar" component={GratitudeJarScreen} />
        {/* Define other screens... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
