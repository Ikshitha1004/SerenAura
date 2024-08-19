import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Question", { questionIndex: 0 })}
      >
        <Text style={styles.buttonText}>Take a Test</Text>
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
    padding: 50,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    marginBottom: 30,
    textAlign: "center", 
    backgroundColor: "#FC6C85",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    fontWeight:"bold",
    
  },
  subtitle: {
    fontSize: 16,
    color: "#1C1C1C",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FC6C85",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
