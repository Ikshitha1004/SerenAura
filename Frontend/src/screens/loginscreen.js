import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.LoginScreen1}>
      <View style={[styles.LoginScreen1Child, styles.iphone1313Layout]} />
      <View style={[styles.LoginScreen1Item, styles.iphone1313Layout]} />
      <Pressable
        style={[styles.LoginScreen1Inner, styles.iphone1313Layout]}
        onPress={() => navigation.navigate("LoginScreen1")}
      />
      <Text style={[styles.username, styles.orTypo]}>username</Text>
      <Text style={[styles.password, styles.orTypo]}>password</Text>
      <Image
        style={[styles.key1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/key-3.png")}
      />
      {/* <Image
        style={[styles.lineIcon, styles.lineLayout]}
        contentFit="cover"
        source={require("../assets/line-11.png")}
      />
      <View style={[styles.lineView, styles.lineLayout]} /> */}
      {/* <Text style={[styles.or, styles.orTypo]}>or</Text> */}
      <Image
        style={[styles.user1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/user-2.png")}
      />
      {/* <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      /> */}
      <Text style={[styles.logInNow, styles.logFlexBox]}>Log In Now</Text>
      <Text style={[styles.logIn, styles.logFlexBox]}>Log In</Text>
      <Text style={[styles.forgotPassword, styles.textTypo]}>
        Forgot Password?
      </Text>
      <Image
        style={[styles.hideIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/hide1.png")}
      />
      <Image
        style={[styles.hideIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/hide.png")}
      />
      <Text
        style={[styles.dontHaveAn, styles.signUpPosition]}
      >{`Don’t have an account? `}</Text>
      <Pressable
        style={[styles.signUp, styles.signUpPosition]}
        onPress={() => navigation.navigate("LoginScreen1")}
      >
        <Text style={[styles.signUp1, styles.textTypo]}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1313Layout: {
    height: 60,
    width: 300,
    borderRadius: Border.br_9xl,
    left: 45,
    position: "absolute",
  },
  orTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout1: {
    height: 14,
    width: 14,
    position: "absolute",
  },
  lineLayout: {
    height: 1,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  logFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  signUpPosition: {
    top: 610,
    position: "absolute",
  },
  iconLayout: {
    width: 30,
    height: 30,
    top: 0,
    position: "absolute",
  },
  LoginScreen1Child: {
    top: 370,
    backgroundColor: Color.colorWhite,
    width: 300,
    borderRadius: Border.br_9xl,
    left: 45,
  },
  LoginScreen1Item: {
    top: 444,
    backgroundColor: Color.colorWhite,
    width: 300,
    borderRadius: Border.br_9xl,
    left: 45,
  },
  LoginScreen1Inner: {
    top: 536,
    backgroundColor: Color.colorMistyrose,
    width: 300,
    borderRadius: Border.br_9xl,
    left: 45,
  },
  username: {
    top: 387,
    left: 99,
    color: Color.colorDimgray_100,
    textAlign: "center",
  },
  password: {
    top: 461,
    left: 100,
    color: Color.colorDimgray_100,
    textAlign: "center",
  },
  key1Icon: {
    left: 78,
    top: 467,
    width: 14,
  },
  user1Icon: {
    top: 393,
    left: 78,
  },
  vectorIcon: {
    top: -94,
    width: 403,
    height: 437,
    left: 0,
    position: "absolute",
  },
  text: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
    left: 0,
  },
  logInNow: {
    marginLeft: -75,
    top: 323,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 149,
    height: 33,
    color: Color.colorWhite,
  },
  logIn: {
    marginLeft: -43,
    top: 552,
    color: "#1e1e1e",
    width: 86,
    height: 27,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    left: "50%",
  },
  forgotPassword: {
    top: 510,
    left: 190,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  hideIcon: {
    left: 310,
    top: 467,
    width: 14,
  },
  dontHaveAn: {
    fontSize: FontSize.size_sm,
    top: 610,
    color: Color.colorWhite,
    left: 60,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
  },
  signUp1: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
  },
  signUp: {
    left: 231,
  },
  LoginScreen1: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDimgray_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LoginScreen;
