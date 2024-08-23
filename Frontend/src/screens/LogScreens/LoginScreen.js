// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ToastAndroid,
//   Alert,
// } from "react-native";
// import { Image } from "expo-image";
// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import * as SplashScreen from "expo-splash-screen";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "expo-router";
// import { auth } from "../../configs/firebaseConfig";
// import { useNavigation } from "@react-navigation/native";

// SplashScreen.preventAutoHideAsync();

// const Login = () => {
//   const router = useRouter();
//   const navigation = useNavigation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [secureTextEntry, setSecureTextEntry] = useState(true);

//   let [fontsLoaded] = useFonts({
//     Poppins_400Regular,
//     Poppins_500Medium,
//     Poppins_700Bold,
//   });

//   useEffect(() => {
//     if (fontsLoaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   const onSignIn = async () => {
//     if (!email || !password) {
//       ToastAndroid.show("Please fill all the fields", ToastAndroid.LONG);
//       return;
//     }

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       console.log("User signed in:", user);
//       navigation.navigate("Dashboard");
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error("Error signing in:", errorMessage);

//       if (
//         errorCode === "auth/user-not-found" ||
//         errorCode === "auth/wrong-password"
//       ) {
//         Alert.alert(
//           "Invalid credentials",
//           "Please check your username and password."
//         );
//       } else {
//         Alert.alert(
//           "An error occurred",
//           "Something went wrong. Please try again later."
//         );
//       }
//     }
//   };

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.logInNow}>Log In Now</Text>
//       <View style={styles.inputContainer}>
//         <View style={styles.inputField}>
//           <Image
//             style={styles.icon}
//             contentFit="cover"
//             source={require("../../assets/email.png")}
//           />
//           <TextInput
//             style={styles.inputText}
//             placeholder="Email"
//             onChangeText={(value) => setEmail(value)}
//           />
//         </View>
//         <View style={styles.inputField}>
//           <Image
//             style={styles.icon}
//             contentFit="cover"
//             source={require("../../assets/key-3.png")}
//           />
//           <TextInput
//             style={styles.inputText}
//             placeholder="Password"
//             secureTextEntry={secureTextEntry}
//             onChangeText={(value) => setPassword(value)}
//           />
//           <TouchableOpacity
//             onPress={() => setSecureTextEntry(!secureTextEntry)}
//           >
//             <Image
//               style={styles.hideIcon}
//               contentFit="cover"
//               source={require("../../assets/hide.png")}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <TouchableOpacity style={styles.logInButton} onPress={onSignIn}>
//         <Text style={styles.logInText}>Log In</Text>
//       </TouchableOpacity>
//       <View style={styles.footer}>
//         <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
//         <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//           <Text style={styles.signUp}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FAF3E0",
//     paddingHorizontal: "10%",
//     paddingVertical: "15%",
//   },
//   logInNow: {
//     fontSize: 24,
//     fontWeight: "bold",
//     fontFamily: "Poppins_700Bold",
//     color: "#000000",
//     textAlign: "center",
//     marginBottom: "40%",
//   },
//   inputContainer: {
//     marginBottom: 30,
//   },
//   inputField: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//     borderRadius: 32,
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     marginBottom: 15,
//   },
//   icon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   inputText: {
//     fontSize: 16,
//     fontFamily: "Poppins_400Regular",
//     color: "#696969",
//     flex: 1,
//   },
//   hideIcon: {
//     width: 20,
//     height: 20,
//   },
//   forgotPassword: {
//     color: "#696969",
//     fontSize: 14,
//     fontFamily: "Poppins_400Regular",
//     textAlign: "right",
//     marginBottom: 30,
//   },
//   logInButton: {
//     backgroundColor: "#FF6951",
//     borderRadius: 32,
//     paddingVertical: 15,
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   logInText: {
//     fontSize: 16,
//     fontFamily: "Poppins_500Medium",
//     color: "#1e1e1e",
//   },
//   footer: {
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   dontHaveAn: {
//     fontSize: 14,
//     color: "#1e1e1e",
//     fontFamily: "Poppins_500Medium",
//   },
//   signUp: {
//     fontSize: 14,
//     color: "#FF6951",
//     fontFamily: "Poppins_400Regular",
//     marginLeft: 5,
//   },
// });

// export default Login;
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  ScrollView,Dimensions, // Import ScrollView
} from "react-native";
import { Image } from "expo-image";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";
import { auth } from "../../configs/firebaseConfig";
import { useNavigation } from "@react-navigation/native";


SplashScreen.preventAutoHideAsync();
const { width, height } = Dimensions.get("window");

const Login = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const onSignIn = async () => {
    if (!email || !password) {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.LONG);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);
      navigation.navigate("Dashboard");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorMessage);

      if (
        errorCode === "auth/user-not-found" ||
        errorCode === "auth/wrong-password"
      ) {
        Alert.alert(
          "Invalid credentials",
          "Please check your username and password."
        );
      } else {
        Alert.alert(
          "An error occurred",
          "Something went wrong. Please try again later."
        );
      }
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* Logo and Tagline */}
        <Image
          source={require("../../assets/logof.png")}
          style={styles.bannerImage}
        />
        <Text style={styles.title}>Your companion for calmness</Text>
        

        {/* Login Form */}
        {/* <Text style={styles.logInNow}>Log In Now</Text> */}
        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../../assets/email.png")}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
            />
          </View>
          <View style={styles.inputField}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../../assets/key-3.png")}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              secureTextEntry={secureTextEntry}
              onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            >
              <Image
                style={styles.hideIcon}
                contentFit="cover"
                source={require("../../assets/hide.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.logInButton} onPress={onSignIn}>
          <Text style={styles.logInText}>Log In</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center", // Center content vertically in scroll view
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width*0.04,
    paddingVertical: height*0.08,
    alignItems: "center", // Center content horizontally
  },
  bannerImage: {
   
    height: 200,
    width: 231,
    resizeMode: "contain",
  },
  title: {
    fontSize: width*0.05,
    paddingHorizontal: width*0.05,
    textAlign: "center",
    marginTop: 10,
    //fontWeight: "bold",
  },
  subTitle: {
    fontSize: 2,
    paddingHorizontal: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  logInNow: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: "10%",
  },
  inputContainer: {
    marginTop:height*0.06,
    width: width*0.9,
    marginBottom: height*0.05,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderWidth: width*0.002,
    borderColor:"000000"
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#000000",
    flex: 1,
  },
  hideIcon: {
    width: 20,
    height: 20,
  },
  logInButton: {
    backgroundColor: "#FF6951",
    borderRadius: 32,
    paddingVertical: 15,
    alignItems: "center",
    width: width*0.8,
    marginBottom: 30,
  },
  logInText: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: "#1e1e1e",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  dontHaveAn: {
    fontSize: 14,
    color: "#1e1e1e",
    fontFamily: "Poppins_500Medium",
  },
  signUp: {
    fontSize: 14,
    color: "#FF6951",
    fontFamily: "Poppins_400Regular",
    marginLeft: 5,
  },
});

export default Login;
