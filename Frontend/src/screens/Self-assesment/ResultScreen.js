import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ResultScreen({ route, navigation }) {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your Mental Wellness Score</Text>
      </View>
      <Text style={styles.score}>{score}</Text>
      <Text style={styles.subtitle}>
        A higher score indicates higher levels of distress or emotional challenges.
        Please consider reaching out to a mental health professional if you have concerns.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={styles.buttonText}>Retake Assessment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e6fa",
    padding: 20,
  },
  titleContainer: {
    backgroundColor: "#fc6c85",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    color: "#ffffff", 
    fontWeight: "bold",
  },
  score: {
    fontSize: 48,
    color: "#000000",
    marginBottom: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#1c1c1c",
    textAlign: "center",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#fc6c85",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 7,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
