import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LogScreens/LoginScreen";
import CalendarScreen from "../screens/Trackers/MoodTrackCal";
import WelcomeScreen from "../screens/Self-assesment/WelcomeScreen"; // Correct default import
import ResultScreen from "../screens/Self-assesment/ResultScreen";
import QuestionScreen from "../screens/Self-assesment/QuestionScreen";

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
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ title: "Calendar" }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: "Result" }}
        />
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={{ title: "Question" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
