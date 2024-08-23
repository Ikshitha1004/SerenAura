// import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

// Get the screen dimensions
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
    paddingHorizontal: width * 0.05, // 5% of screen width
    paddingTop: height * 0.05, // 5% of screen height
    backgroundColor: "#EEEEEE",
  },
  title: {
    fontSize: width * 0.06, // 6% of screen width
    fontWeight: "bold",
    marginBottom: height * 0.02, // 2% of screen height
  },
  content: {
    marginTop: height * 0.05, // 5% of screen height
    fontSize: width * 0.035, // 4.5% of screen width
    lineHeight: width * 0.07, // 7% of screen width
    color: "#4a4a4a",
    textAlign: "justify",
  },
});

export default AboutUsScreen;
