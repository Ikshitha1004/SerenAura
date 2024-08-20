import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
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
import PoliciesScreen from '../screens/Dashboard/PoliciesScreen';
import Sidebar from "../components/Sidebar";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
    <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
    <Drawer.Screen name="AboutUsScreen" component={AboutUsScreen} />
    <Drawer.Screen name="FeedbackScreen" component={FeedbackScreen} />
    <Drawer.Screen name="RatingScreen" component={RatingScreen} />
    <Drawer.Screen name="PoliciesScreen" component={PoliciesScreen} />
  </Drawer.Navigator>
);

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
          options={{ title: "Calendar" }}
        /> 

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
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home" }}

          name="JournalEntry"
          component={JournalEntryScreen}
          options={{ title: "New Entry" }}
        />
        <Stack.Screen
          name="JournalList"
          component={JournalListScreen}
          options={{ title: "Your Journal" }}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ title: "calandar" }}
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
        <Stack.Screen
          name="PT"
          component={ProgressTrack}
          options={{ title: "PT" }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;