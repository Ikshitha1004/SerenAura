import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LogScreens/LoginScreen";
import CalendarScreen from "../screens/Trackers/MoodTrackCal";
import SleepTracker from "../screens/Profile/SleepTracker";
import SleepDataInputScreen from "../screens/Profile/Sleepinput";
import AvatarSelection from "../screens/Profile/Avatar";
import ProfileScreen from "../screens/Profile/ProfilePage";
import DashboardScreen from "../screens/Dashboard/Dashboard";
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        {/*
        <Stack.Screen
          name="SleepTracker"
          component={SleepTracker}
          options={{ title: "Calendar" }}
        />
        <Stack.Screen
          name="Sleep"
          component={SleepDataInputScreen}
          options={{ title: "Calendar" }}
        /> */}
         <Stack.Screen
          name="SleepTracker"
          component={ DashboardScreen }
          options={{ title: "Calendar" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;