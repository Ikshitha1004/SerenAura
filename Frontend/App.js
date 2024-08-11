import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GratitudeJarScreen from "./src/screens/GratitudeJarScreens/GratitudeJarScreen";
// Import other screens...
import LoginScreen from "./src/screens/LogScreens/LoginScreen";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Define other screens... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
