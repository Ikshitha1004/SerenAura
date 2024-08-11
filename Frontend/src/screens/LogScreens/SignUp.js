import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color } from "../../styles/GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

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
  fullNameTypo: {
    textAlign: "left",
    left: 102,
    color: Color.colorDimgray_100,
    fontFamily: "Poppins-Regular",
    fontSize: FontSize.size_base,
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
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    top: 721,
    position: "absolute",
  },
  signUpNowLayout: {
    height: 30,
    position: "absolute",
  },
  logIn1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
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
    backgroundColor: Color.colorWhite,
    width: 300,
    borderRadius: Border.br_9xl,
    left: 45,
  },
  iphone1313Pro2Item: {
    top: 444,
    backgroundColor: Color.colorWhite,
    width: 300,
    borderRadius: Border.br_9xl,
    left: 45,
  },
  email: {
    top: 462,
    left: 100,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  fullName: {
    top: 389,
  },
  iphone1313Pro2Inner: {
    top: 518,
    width: 300,
    borderRadius: Border.br_9xl,
    left: 45,
  },
  password: {
    top: 537,
  },
  rectanglePressable: {
    top: 599,
    backgroundColor: Color.colorMistyrose,
    width: 300,
    borderRadius: Border.br_9xl,
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
    fontFamily: "Poppins-Medium",
    width: 86,
    height: 27,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
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
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  signUpNow: {
    marginLeft: -91,
    top: 323,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    width: 182,
    color: Color.colorWhite,
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
    color: Color.colorWhite,
    left: 60,
  },
  logIn1: {
    color: Color.colorGray_100,
  },
  logIn: {
    left: 250,
  },
  iphone1313Pro2: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDimgray_200,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SignUp;
