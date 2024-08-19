import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from "../screens/LogScreens/LoginScreen";
import CalendarScreen from "../screens/Trackers/MoodTrackCal";
import SleepTracker from "../screens/Profile/SleepTracker";
import SleepDataInputScreen from "../screens/Profile/Sleepinput";
import AvatarSelection from "../screens/Profile/Avatar";
import ProfileScreen from "../screens/Profile/ProfilePage";
import DashboardScreen from "../screens/Dashboard/Dashboard";
import RatingScreen from '../screens/Dashboard/RatingScreen';
import AboutUsScreen from '../screens/Dashboard/AboutUsScreen';
import FeedbackScreen from '../screens/Dashboard/FeedBackScreen';
import PoliciesScreen from '../screens/Dashboard/PoliciesScreen';
import Sidebar from '../components/Sidebar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
    <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    <Drawer.Screen name="AboutUsScreen" component={AboutUsScreen} />
    <Drawer.Screen name="FeedbackScreen" component={FeedbackScreen} />
    <Drawer.Screen name="RatingScreen" component={RatingScreen} />
    <Drawer.Screen name="PoliciesScreen" component={PoliciesScreen} />
  </Drawer.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{ headerShown: false }} // Hide header for the Drawer Navigator
        />
        <Stack.Screen
          name="SleepTracker"
          component={SleepTracker}
          options={{ title: "Sleep Tracker" }}
        />
        <Stack.Screen
          name="SleepDataInput"
          component={SleepDataInputScreen}
          options={{ title: "Sleep Data Input" }}
        />
        <Stack.Screen
          name="AvatarSelection"
          component={AvatarSelection}
          options={{ title: "Select Avatar" }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;