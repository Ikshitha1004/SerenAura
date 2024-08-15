import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const SignUp = () => {
  const navigation = useNavigation();

  // Load fonts
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.signUpNow}>Sign Up Now</Text>

      <View style={styles.inputContainer}>
        <Image
          style={{ height: 15, width: 15, marginRight: 10 }}
          contentFit="cover"
          source={require("../../assets/user-2.png")}
        />
        <Text style={styles.inputLabel}>Full Name</Text>
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../assets/email.png")}
        />
        <Text style={styles.inputLabel}>Email</Text>
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../assets/key-3.png")}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <Image
          style={styles.hideIcon}
          contentFit="cover"
          source={require("../../assets/hide.png")}
        />
      </View>

      <Pressable
        style={styles.signUpButton}
        onPress={() => navigation.navigate("IPhone1313Pro22")}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#967bb6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  signUpNow: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
    color: "lavender",
    textAlign: "center",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lavender",
    borderRadius: 32,
    width: "100%",
    padding: 15,
    marginBottom: 20,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  inputLabel: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#696969",
    flex: 3,
  },
  hideIcon: {
    height: 20,
    width: 20,
  },
  signUpButton: {
    backgroundColor: "lavender",
    borderRadius: 32,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginTop: 30,
  },
  signUpButtonText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
});

export default SignUp;
