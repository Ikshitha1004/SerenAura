import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignup = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logof.png")}
        style={styles.bannerImage}
      />
      <Text style={styles.title}>Your companion for calmness</Text>
      <Text style={styles.subTitle}>
        Come home to SerenAura!{"\n"}Take easier steps to wellness
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center", 
    padding: 20,
  },
  logo: {
    height: 60,
    width: 140,
    marginVertical: 30,
  },
  bannerImage: {
    marginTop: "-30%",

    height: 250,
    width: 231,
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    marginTop: 40,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between", 
    width: "100%", 
    maxWidth: 300, 
    marginTop: 20,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    paddingVertical: 15,
    borderRadius: 30,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
  },
});

export default HomeScreen;