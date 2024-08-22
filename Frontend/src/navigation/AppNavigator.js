// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeScreen from '../screens/HomeScreen';
// import LoginScreen from "../screens/LogScreens/LoginScreen";
// import CalendarScreen from "../screens/Trackers/MoodTrackCal";
// import SleepTracker from "../screens/Profile/SleepTracker";
// import SleepDataInputScreen from "../screens/Profile/Sleepinput";
// import AvatarSelection from "../screens/Profile/Avatar";
// import ProfileScreen from "../screens/Profile/ProfilePage";
// import DashboardScreen from "../screens/Dashboard/Dashboard";
// import MyEventsScreen from '../screens/Community/MyEvent';
// //import Progress from '../screens/Profile/ProgressTracker';
// import CommunityScreen from '../screens/Community/index';
// import AddEventScreen from '../screens/Community/AddEvent';
// import RatingScreen from '../screens/Dashboard/RatingScreen';
// import AboutUsScreen from '../screens/Dashboard/AboutUsScreen';
// import FeedbackScreen from '../screens/Dashboard/FeedBackScreen';
// import PoliciesScreen from '../screens/Dashboard/PoliciesScreen';
// import Sidebar from "../components/Sidebar";

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => (
//   <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
//     <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
//     <Drawer.Screen name="AboutUsScreen" component={AboutUsScreen} />
//     <Drawer.Screen name="FeedbackScreen" component={FeedbackScreen} />
//     <Drawer.Screen name="RatingScreen" component={RatingScreen} />
//     <Drawer.Screen name="PoliciesScreen" component={PoliciesScreen} />
//   </Drawer.Navigator>
// );
// const AppNavigator = () => (
//   <NavigationContainer>
//     <Stack.Navigator>
//         <Stack.Screen
//           name="Main"
//           component={DrawerNavigator}
//           options={{ headerShown: false }} // Hide header for the Drawer Navigator
//         />
//         <Stack.Screen
//           name="SleepTracker"
//           component={SleepTracker}
//           options={{ title: "Sleep Tracker" }}
//         />
//         <Stack.Screen
//           name="SleepDataInput"
//           component={SleepDataInputScreen}
//           options={{ title: "Calendar" }}
//         />

//          {/* <Stack.Screen
//           name="SleepTracker"
//           component={ DashboardScreen }
//           options={{ title: "Calendar" }}
//         /> */}
//         <Stack.Screen
//           name="Community"
//           component={CommunityScreen}
//           options={{ title: "Community" }}
//         />
//         <Stack.Screen
//         name="AddEvent"
//         component={AddEventScreen}
//         options={{ title: "Add your event" }}
//         />
//         <Stack.Screen
//         name="MyEvents"
//         component={MyEventsScreen}
//         options={{ title: "MyEvents" }}
//         />
//         <Stack.Screen
//           name="Dashboard"
//           component={DrawerNavigator}
//           options={{ headerShown: false,title:"Dashboard" }}
//         />
//         <Stack.Screen
//           name="AvatarSelection"
//           component={AvatarSelection}
//           options={{ title: "Select Avatar" }}
//         />
//         <Stack.Screen
//           name="ProfileScreen"
//           component={ProfileScreen}
//           options={{ title: "Profile" }}
//         />
//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{ title: "Home" }}
//           />
//           <Stack.Screen
//           name="JournalEntry"
//           component={JournalEntryScreen}
//           options={{ title: "New Entry" }}
//         />
//         <Stack.Screen
//           name="JournalList"
//           component={JournalListScreen}
//           options={{ title: "Your Journal" }}
//         />
//         <Stack.Screen
//           name="Calendar"
//           component={CalendarScreen}
//           options={{ title: "calandar" }}
//         />
//         <Stack.Screen
//           name="Welcome"
//           component={WelcomeScreen}
//           options={{ title: "Welcome" }}
//         />
//         <Stack.Screen
//           name="Result"
//           component={ResultScreen}
//           options={{ title: "Result" }}
//         />
//         <Stack.Screen
//           name="Question"
//           component={QuestionScreen}
//           options={{ title: "Question" }}
//         />
//         <Stack.Screen
//           name="PT"
//           component={ProgressTrack}
//           options={{ title: "PT" }}

//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// ;

// export default AppNavigator;
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screens/LogScreens/LoginScreen";
import SignUp from "../screens/LogScreens/SignUp";
import CalendarScreen from "../screens/Trackers/MoodTrackCal";
import SleepTracker from "../screens/Profile/SleepTracker";
import SleepDataInputScreen from "../screens/Profile/Sleepinput";
import AvatarSelection from "../screens/Profile/Avatar";
import ProfileScreen from "../screens/Profile/ProfilePage";
import DashboardScreen from "../screens/Dashboard/Dashboard";
import RatingScreen from "../screens/Dashboard/RatingScreen";
import AboutUsScreen from "../screens/Dashboard/AboutUsScreen";
import FeedbackScreen from "../screens/Dashboard/FeedBackScreen";
import PoliciesScreen from "../screens/Dashboard/PoliciesScreen";
import Sidebar from "../components/Sidebar";
import HomeScreen from "../screens/HomeScreen";
import QuestionScreen from "../screens/Self-assesment/QuestionScreen";
import ResultScreen from "../screens/Self-assesment/ResultScreen";
import WelcomeScreen from "../screens/Self-assesment/WelcomeScreen";
import MusicHomeScreen from "../screens/MusicPlayer/HomeScreen";
import PlayerScreen from "../screens/MusicPlayer/PlayerScreen";
import SongListScreen from "../screens/MusicPlayer/SongListScreen";
import MyEventsScreen from "../screens/Community/MyEvent";
import Progress from "../screens/Profile/ProgressTrack";
import CommunityScreen from "../screens/Community/index";
import AddEventScreen from "../screens/Community/AddEvent";
import AddNoteScreen from "../screens/GratitudeJarScreens/AddNoteScreen";
import GratitudeJarScreen from "../screens/GratitudeJarScreens/GratitudeJarScreen";
import NotesScreen from "../screens/GratitudeJarScreens/NotesScreen";
import GroundingTechniquesScreen from "../screens/GroundingTechniquesScreens/GroundingTechniquesScreen";
import JournalEntryScreen from "../screens/JournalScreens/JournalEntryScreen";
import JournalListScreen from "../screens/JournalScreens/JournalListScreen";
import SettingsScreen from "../screens/Dashboard/Settings";
import Entry from "../screens/LogScreens/Entry";
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
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: " W" }}
        />
        <Stack.Screen
          name="Entry"
          component={Entry}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="AvatarSelection"
          component={AvatarSelection}
          options={{ title: "Select Avatar" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DrawerNavigator}
          options={{ headerShown: false, title: "Dashboard" }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={{ title: "Questions" }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: "Result" }}
        />
        <Stack.Screen name="MusicHome" component={MusicHomeScreen} />
        <Stack.Screen name="Songs" component={SongListScreen} />
        <Stack.Screen name="Player" component={PlayerScreen} />
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
          name="GratitudeJarScreen"
          component={GratitudeJarScreen}
          options={{ title: "Gratitude Jar" }}
        />
        <Stack.Screen
          name="NotesScreen"
          component={NotesScreen}
          options={{ title: "Your Memories" }}
        />
        <Stack.Screen
          name="AddNoteScreen"
          component={AddNoteScreen}
          options={{ title: "Add New Note" }}
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
          name="MoodTracker"
          component={CalendarScreen}
          options={{ title: "Mood Track" }}
        />
        <Stack.Screen
          name="Grounding Techniques"
          component={GroundingTechniquesScreen}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="Progress"
          component={Progress}
          options={{ title: "Progress" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
