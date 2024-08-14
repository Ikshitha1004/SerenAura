import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const Login = () => {
  const navigation = useNavigation();

  // Load fonts
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  // Manage secureTextEntry state
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Return null until fonts are loaded
  }

  const handleSubmit = () => {
    // Add your login logic here
    Alert.alert("Login Button Pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logInNow}>Log In Now</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../../assets/user-2.png")}
          />
          <TextInput style={styles.inputText} placeholder="username" />
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
      <Pressable style={styles.logInButton} onPress={handleSubmit}>
        <Text style={styles.logInText}>Log In</Text>
      </Pressable>
      <View style={styles.footer}>
        <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
        <Pressable onPress={() => navigation.navigate("IPhone1313Pro1")}>
          <Text style={styles.signUp}>Sign Up</Text>
        </Pressable>
      </View>
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
