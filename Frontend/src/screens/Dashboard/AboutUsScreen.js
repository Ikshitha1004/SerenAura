// import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us:</Text>
      <Text style={styles.content}>
        Our app is designed to promote mental wellness by providing users with
        tools and resources to better understand and manage their emotional
        health. Through a series of self-assessment tests, calming music, and a
        gratitude jar, journals, users can track their mental well-being and
        identify areas that may need attention. The app fosters a supportive
        community where users can share experiences, seek advice, and connect
        with others. Our mission is to make mental health support accessible,
        encouraging users to take proactive steps toward a healthier, more
        balanced life.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05, 
    paddingTop: height * 0.05,
    backgroundColor: "#EEEEEE",
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginBottom: height * 0.02, 
  },
  content: {
    marginTop: height * 0.05, 
    fontSize: width * 0.035, 
    lineHeight: width * 0.07, 
    color: "#4a4a4a",
    textAlign: "justify",
  },
});

export default AboutUsScreen;
