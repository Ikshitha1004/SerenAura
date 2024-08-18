import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LogScreens/LoginScreen";
import CalendarScreen from "../screens/Trackers/MoodTrackCal";
const Stack = createStackNavigator();
import JournalEntryScreen from "../screens/JournalScreens/JournalEntryScreen";
import JournalListScreen from "../screens/JournalScreens/JournalListScreen";
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
          name="JournalEntry"
          component={JournalEntryScreen}
          options={{ title: "New Entry" }}
        />
        <Stack.Screen
          name="JournalList"
          component={JournalListScreen}
          options={{ title: "Your Journal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
