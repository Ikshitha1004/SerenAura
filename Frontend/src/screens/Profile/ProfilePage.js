import { StyleSheet, View, ImageBackground, Text } from "react-native";
import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

const ProfileScreen = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.debugText}>Profile Screen</Text>
        <Top />
        <Middle />
        <Bottom />
      </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  debugText: {
    color: "black",
    fontSize: 24,
  },
});

export default ProfileScreen;