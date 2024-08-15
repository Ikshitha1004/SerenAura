import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import GratitudeJarScreen from "../screens/GratitudeJarScreens/GratitudeJarScreen";
import CommunityScreen from "../screens/Community/index";
import ProfileScreen from "../screens/Profile/ProfilePage";
import SignUp from "../screens/LogScreens/SignUp";
import Login from "../screens/LogScreens/LoginScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        /> */}
        {/* <Stack.Screen
          name="GratitudeJar"
          component={GratitudeJarScreen}
          options={{ title: "Gratitude Jar" }}
        /> */}
        {/* <Stack.Screen
          name="Community"
          component={CommunityScreen}
          options={{ title: "Community" }}
        /> */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
