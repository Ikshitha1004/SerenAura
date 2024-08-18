// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
 import HomeScreen from '../screens/HomeScreen';
 import GratitudeJarScreen from '../screens/GratitudeJarScreens/GratitudeJarScreen';
 import NotesScreen from '../screens/GratitudeJarScreens/NotesScreen';
 import AddNoteScreen from '../screens/GratitudeJarScreens/AddNoteScreen';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       {/* <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="GratitudeJarScreen" component={GratitudeJarScreen} />
//       <Stack.Screen name="NotesScreen" component={NotesScreen} />
//       <Stack.Screen name="AddNoteScreen" component={AddNoteScreen} /> */}
//       <Stack.Screen 
//       name="Home" 
//       component={HomeScreen} 
//       options={{ title: 'Home' }} 
//     />
//     <Stack.Screen 
//     name="GratitudeJarScreen" 
//     component={GratitudeJarScreen} 
//     options={{ title: 'Gratitude Jar' }} 
//     />
//   <Stack.Screen 
//   name="NotesScreen" 
//   component={NotesScreen} 
//   options={{ title: 'Your Memories' }} 
//   />
// <Stack.Screen 
//   name="AddNoteScreen" 
//   component={AddNoteScreen} 
//   options={{ title: 'Add New Note' }} 
// />

//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;
//My working version above

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LogScreens/LoginScreen";
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
      <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ title: 'Home' }} 
    />
    <Stack.Screen 
    name="GratitudeJarScreen" 
    component={GratitudeJarScreen} 
    options={{ title: 'Gratitude Jar' }} 
    />
  <Stack.Screen 
  name="NotesScreen" 
  component={NotesScreen} 
  options={{ title: 'Your Memories' }} 
  />
<Stack.Screen 
  name="AddNoteScreen" 
  component={AddNoteScreen} 
  options={{ title: 'Add New Note' }} 
/>

    </Stack.Navigator>
  );
};

export default AppNavigator;