import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Middle = () => {
  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/user.png")} style={styles.image} />
        <Text style={styles.userName}>Abena
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.middleSectionTextContainer}>
        <View style={styles.middleSectionText}>
          <Text style={styles.topText}>Applied</Text>
          <Text style={styles.bottomText}>28</Text>
        </View>

        <View style={styles.middleSectionText}>
          <Text style={styles.topText}>Reviewed</Text>
          <Text style={styles.bottomText}>73</Text>
        </View>

        {/* Third Section */}
        <View style={styles.middleSectionText}>
          <Text style={styles.topText}>Contacted</Text>
          <Text style={styles.bottomText}>18</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 5,
  },
  userName: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  middleSectionTextContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  middleSectionText: {
    alignItems: "center",
    justifyContent: "center",
  },
  topText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  bottomText: {
    fontSize: 16,
    color: "gray",
  },
});

export default Middle;
