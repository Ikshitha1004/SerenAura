// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import { useNavigation } from "@react-navigation/native";

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   const handleLogin = () => {
//     navigation.navigate("Login");
//   };

//   const handleSignup = () => {
//     navigation.navigate("SignUp");
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require("../assets/splash.png")} style={styles.logo} />
//       <Image
//         source={require("../assets/splash.png")}
//         style={styles.bannerImage}
//       />
//       <Text style={styles.title}>Lorem ipsum dolor.</Text>
//       <Text style={styles.subTitle}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore
//       </Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={handleSignup}>
//           <Text style={styles.buttonText}>Sign-up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center", // Center items vertically
//     padding: 20, // Add padding to avoid edges
//   },
//   logo: {
//     height: 40,
//     width: 140,
//     marginVertical: 30,
//   },
//   bannerImage: {
//     marginVertical: 20,
//     height: 250,
//     width: 231,
//   },
//   title: {
//     fontSize: 40,
//     paddingHorizontal: 20,
//     textAlign: "center",
//     marginTop: 40,
//   },
//   subTitle: {
//     fontSize: 18,
//     paddingHorizontal: 20,
//     textAlign: "center",
//     marginVertical: 20,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between", // Space out buttons evenly
//     width: "100%", // Make container full width
//     maxWidth: 300, // Optional: limit max width
//     marginTop: 20,
//   },
//   button: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     paddingVertical: 15,
//     borderRadius: 30,
//     marginHorizontal: 5, // Add margin between buttons
//   },
//   buttonText: {
//     fontSize: 18,
//     color: "black",
//   },
// });

// export default HomeScreen;
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.jarIcon} onPress={() => navigation.navigate('GratitudeJarScreen')}>
        <Text style={styles.iconText}>🫙</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Click the jar to enter the Gratitude Jar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
  },
  jarIcon: {
    fontSize: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  iconText: {
    fontSize: 100,
  },
});

export default HomeScreen;
