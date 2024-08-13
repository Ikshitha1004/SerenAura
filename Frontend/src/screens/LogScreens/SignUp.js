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
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null; // You can return a custom loading component here if you want
  }
  return (
    <View style={styles.iphone1313Pro2}>
      <View style={[styles.iphone1313Pro2Child, styles.iphone1313Layout]} />
      <View style={[styles.iphone1313Pro2Item, styles.iphone1313Layout]} />
      <Text style={[styles.email, styles.orTypo]}>Email</Text>
      <Text style={[styles.fullName, styles.fullNameTypo]}>Full name</Text>
      {/* <Image
        style={[styles.iphone1313Pro2Inner, styles.iphone1313Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      /> */}
      <Text style={[styles.password, styles.fullNameTypo]}>Password</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.iphone1313Layout]}
        onPress={() => navigation.navigate("IPhone1313Pro22")}
      />
      <Image
        style={[styles.user2Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../../assets/user-2.png")}
      />
      <Image
        style={[styles.key3Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../assets/key-3.png")}
      />
      <Text style={[styles.signUp, styles.signFlexBox]}>Sign Up</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.iphone1313Pro2Child1, styles.lineViewLayout]} />
      <Text style={[styles.or, styles.orTypo]}>or</Text>
      <Text style={[styles.signUpNow, styles.signUpNowLayout]}>
        Sign Up Now
      </Text>
      {/* <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../../assets/vector-1.png")}
      /> */}
      <Image
        style={[styles.hideIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../../assets/hide.png")}
      />
      <Image
        style={[styles.email5611271Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../../assets/email.png")}
      />
      {/* <Text style={[styles.alreadyHaveAn, styles.logIn1Typo]}>
        Already have an account?
      </Text>
      <Pressable
        style={[styles.logIn, styles.logInPosition]}
        onPress={() => navigation.navigate("IPhone1313Pro23")}
      >
        <Text style={[styles.logIn1, styles.logIn1Typo]}>Log In</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1313Layout: {
    height: 60,
    width: 300,
    borderRadius: 32,
    left: 45,
    position: "absolute",
  },
  orTypo: {
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    position: "absolute",
  },
  fullNameTypo: {
    textAlign: "left",
    left: 102,
    color: "#696969",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    position: "absolute",
  },
  iconLayout1: {
    height: 14,
    width: 14,
    left: 78,
    position: "absolute",
  },
  iconPosition: {
    top: 541,
    height: 14,
    width: 14,
    position: "absolute",
  },
  signFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "50%",
    textAlign: "center",
  },
  lineViewLayout: {
    height: 1,
    width: 111,
    borderTopWidth: 1,
    borderColor: "#FFFFFF",
    borderStyle: "solid",
    top: 721,
    position: "absolute",
  },
  signUpNowLayout: {
    height: 30,
    position: "absolute",
  },
  logIn1Typo: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  logInPosition: {
    top: 671,
    position: "absolute",
  },
  iconLayout: {
    width: 30,
    top: 0,
    height: 30,
    position: "absolute",
  },
  iphone1313Pro2Child: {
    top: 370,
    backgroundColor: "#FFFFFF",
    width: 300,
    borderRadius: 32,
    left: 45,
  },
  iphone1313Pro2Item: {
    top: 444,
    backgroundColor: "#FFFFFF",
    width: 300,
    borderRadius: 32,
    left: 45,
  },
  email: {
    top: 462,
    left: 100,
    color: "696969",
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  fullName: {
    top: 389,
  },
  iphone1313Pro2Inner: {
    top: 518,
    width: 300,
    borderRadius: 32,
    left: 45,
  },
  password: {
    top: 537,
  },
  rectanglePressable: {
    top: 599,
    backgroundColor: "FFE4E1",
    width: 300,
    borderRadius: 32,
    left: 45,
  },
  user2Icon: {
    top: 393,
  },
  key3Icon: {
    left: 78,
  },
  signUp: {
    marginLeft: -43,
    top: 615,
    fontWeight: "500",
    fontFamily: "Poppins_500Medium",
    width: 86,
    height: 27,
    color: "1E1E1E",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "50%",
    position: "absolute",
  },
  lineView: {
    left: 60,
  },
  iphone1313Pro2Child1: {
    left: 220,
  },
  or: {
    top: 709,
    left: 187,
    color: "FFFFFF",
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  signUpNow: {
    marginLeft: -91,
    top: 323,
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
    width: 182,
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "50%",
    textAlign: "center",
  },
  vectorIcon: {
    top: -89,
    left: -29,
    width: 419,
    height: 448,
    position: "absolute",
  },
  hideIcon: {
    left: 310,
  },
  email5611271Icon: {
    top: 467,
  },
  alreadyHaveAn: {
    top: 671,
    position: "absolute",
    color: "FFFFFF",
    left: 60,
  },
  logIn1: {
    color: "696969",
  },
  logIn: {
    left: 250,
  },
  iphone1313Pro2: {
    borderRadius: 48,
    backgroundColor: "#A9A9A9",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SignUp;
