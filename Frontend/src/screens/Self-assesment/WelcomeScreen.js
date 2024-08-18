import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Self-Assessment</Text>
      <Text style={styles.subtitle}>
        This self-assessment is designed to help you reflect on your well-being
        over the past week. By taking this short test, you can gain insights
        into your emotional state and identify areas that may need attention.
        Remember, understanding your feelings is the first step towards taking
        care of yourself.
      </Text>
      <Button
        title="Take a Test"
        onPress={() => navigation.navigate("Question", { questionIndex: 0 })}
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
    textAlign: "#F5DEB3",
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 40,
    textAlign: "center",
  },
});