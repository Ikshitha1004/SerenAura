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
import MyEventsScreen from '../screens/Community/MyEvent';
//import Progress from '../screens/Profile/ProgressTracker';
import CommunityScreen from '../screens/Community/index';
import AddEventScreen from '../screens/Community/AddEvent';
import RatingScreen from '../screens/Dashboard/RatingScreen';
import AboutUsScreen from '../screens/Dashboard/AboutUsScreen';
import FeedbackScreen from '../screens/Dashboard/FeedBackScreen';
import { createDrawerNavigator } from "@react-navigation/drawer";
import PoliciesScreen from '../screens/Dashboard/PoliciesScreen';
import Sidebar from "../components/Sidebar";
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

         {/* <Stack.Screen
          name="SleepTracker"
          component={ DashboardScreen }
          options={{ title: "Calendar" }}
        /> */}
        <Stack.Screen
          name="Community"
          component={CommunityScreen}
          options={{ title: "Community" }}
        />
        <Stack.Screen
        name="AddEvent"
        component={AddEventScreen}
        options={{ title: "Add your event" }}
        />
        <Stack.Screen
        name="MyEvents"
        component={MyEventsScreen}
        options={{ title: "MyEvents" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DrawerNavigator}
          options={{ headerShown: false,title:"Dashboard" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;