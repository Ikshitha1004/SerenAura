import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ResultScreen({ route, navigation }) {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Mental Wellness Score</Text>
      <Text style={styles.score}>{score}</Text>
      <Text style={styles.subtitle}>
        A higher score indicates higher levels of distress or emotional challenges.
        Please consider reaching out to a mental health professional if you have concerns.
      </Text>
      <Button
        title="Retake Assessment"
        onPress={() => navigation.navigate("Welcome")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2D3748",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#F5DEB3",
    marginBottom: 20,
  },
  score: {
    fontSize: 48,
    color: "#fff",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 40,
  },
});
