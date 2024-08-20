// screens/AboutUsScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
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
      {/* You can add more content here as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AboutUsScreen;
