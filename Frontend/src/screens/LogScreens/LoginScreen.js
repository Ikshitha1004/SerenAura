import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color } from "../../styles/GlobalStyles";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
const IPhone1313Pro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1313Pro1}>
      <View style={[styles.iphone1313Pro1Child, styles.iphone1313Layout]} />
      <View style={[styles.iphone1313Pro1Item, styles.iphone1313Layout]} />
      <Pressable
        style={[styles.iphone1313Pro1Inner, styles.iphone1313Layout]}
        onPress={() => navigation.navigate("IPhone1313Pro1")}
      />
      <Text style={[styles.username, styles.orTypo]}>username</Text>
      <Text style={[styles.password, styles.orTypo]}>password</Text>
      <Image
        style={[styles.key1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../../assets/key-3.png")}
      />
      <Image
        style={[styles.user1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../../assets/user-2.png")}
      />
      <Text style={[styles.logInNow, styles.logFlexBox]}>Log In Now</Text>
      <Text style={[styles.logIn, styles.logFlexBox]}>Log In</Text>
      <Text style={[styles.forgotPassword, styles.textTypo]}>
        Forgot Password?
      </Text>
      <Image
        style={[styles.hideIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../../assets/hide1.png")}
      />
      <Image
        style={[styles.hideIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../../assets/hide.png")}
      />
      <Text
        style={[styles.dontHaveAn, styles.signUpPosition]}
      >{`Don’t have an account? `}</Text>
      <Pressable
        style={[styles.signUp, styles.signUpPosition]}
        onPress={() => navigation.navigate("IPhone1313Pro1")}
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
    fontFamily: "Poppins-Regular",
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
  phoneIconPosition: {
    top: 3,
    height: 14,
    width: 14,
    position: "absolute",
  },
  textPosition: {
    top: 0,
    position: "absolute",
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
  iphone1313Pro1Child: {
    top: 370,
    backgroundColor: Color.colorWhite,
    width: 300,
    borderRadius: Border.br_9xl,
    left: 45,
  },
  iphone1313Pro1Item: {
    top: 444,
    backgroundColor: Color.colorWhite,
    width: 300,
    borderRadius: Border.br_9xl,
    left: 45,
  },
  iphone1313Pro1Inner: {
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
  lineIcon: {
    top: 664,
    width: 110,
    left: 60,
    height: 1,
  },
  lineView: {
    top: 665,
    left: 220,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    width: 111,
  },
  or: {
    top: 652,
    left: 187,
    color: Color.colorWhite,
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
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    top: 0,
    position: "absolute",
    left: 0,
  },
  iconLocation: {
    height: "66.67%",
    width: "4.05%",
    top: "14.29%",
    right: "84.39%",
    bottom: "19.05%",
    left: "11.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  phoneIcon: {
    left: 284,
  },
  icons8BatteryLevel902: {
    left: 326,
    width: 20,
    height: 20,
  },
  icons8WiFi502: {
    left: 305,
  },
  parent: {
    top: 16,
    left: 22,
    width: 346,
    height: 21,
    position: "absolute",
  },
  logInNow: {
    marginLeft: -75,
    top: 323,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
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
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    left: "50%",
  },
  forgotPassword: {
    top: 510,
    left: 190,
    fontFamily: "Poppins_Medium",
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
    fontFamily: "Poppins_Medium",
  },
  signUp1: {
    fontFamily: "Poppins_Regular",
    color: Color.colorGray_100,
  },
  signUp: {
    left: 231,
  },
  iphone1313Pro1: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDimgray_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1313Pro;
