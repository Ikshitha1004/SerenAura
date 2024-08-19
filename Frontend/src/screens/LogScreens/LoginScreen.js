import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid, // Ensure ToastAndroid is imported
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
import { Alert } from "react-native";
// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // Load fonts
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
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
      // Navigate to the home screen
      // router.push("/calendar");

      // navigation.navigate("")
      navigation.navigate("Home")

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("im");
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
    return null; // Return null until fonts are loaded
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logInNow}>Log In Now</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../../assets/email.png")}
          />
          <TextInput
            style={styles.inputText}
            placeholder="email"
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
            placeholder="password"
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
      {/* <View style={styles.footer}>
        <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
        <Pressable onPress={() => navigation.navigate("IPhone1313Pro1")}>
          <Text style={styles.signUp}>Sign Up</Text>
        </Pressable>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#967bb6",
    paddingHorizontal: "10%",
    paddingVertical: "15%",
  },
  logInNow: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#696969",
    flex: 1,
  },
  hideIcon: {
    width: 20,
    height: 20,
  },
  forgotPassword: {
    color: "#696969",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    textAlign: "right",
    marginBottom: 30,
  },
  logInButton: {
    backgroundColor: "lavender",
    borderRadius: 32,
    paddingVertical: 15,
    alignItems: "center",
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
  },
  dontHaveAn: {
    fontSize: 14,
    color: "#FFFFFF",
    fontFamily: "Poppins_500Medium",
  },
  signUp: {
    fontSize: 14,
    color: "#696969",
    fontFamily: "Poppins_400Regular",
    marginLeft: 5,
  },
});

export default Login;
