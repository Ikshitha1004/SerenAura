
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import GratitudeJarScreen from '../screens/GratitudeJarScreens/GratitudeJarScreen';
import CommunityScreen from '../screens/Community/index';
import ProfileScreen from '../screens/Profile/ProfilePage';

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import GratitudeJarScreen from "../screens/GratitudeJarScreens/GratitudeJarScreen";
import CommunityScreen from "../screens/Community/index";
import SignUp from "../screens/LogScreens/SignUp";
const Stack = createStackNavigator();
import Login from "../screens/LogScreens/LoginScreen";
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="GratitudeJar" component={ProfileScreen} options={{ title: 'Comunity' }} />
        </Stack.Navigator>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="GratitudeJar"
          component={CommunityScreen}
          options={{ title: "Comunity" }}
        /> */}
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "SignUp" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
