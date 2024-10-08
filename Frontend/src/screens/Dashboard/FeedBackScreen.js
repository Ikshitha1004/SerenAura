// screens/FeedbackScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const FeedbackScreen = ({ navigation }) => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (feedback.trim()) {
      Alert.alert(
        "Thank you for your feedback!",
        "Your feedback has been submitted."
      );
      // Handle feedback submission, e.g., send to a server
      setFeedback(""); // Clear the feedback input
      navigation.goBack();
    } else {
      Alert.alert("Error", "Please provide your feedback before submitting.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help Us Improve</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your feedback here..."
        multiline
        numberOfLines={6}
        value={feedback}
        onChangeText={setFeedback}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    marginTop:"20%",
    left:"20%"
  },
  input: {
    height: 200,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 70,
  },
  submitButton: {
    backgroundColor: "#fc6c85",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    left:"30%",
  },
  submitText: {
    color: "white",
    fontSize: 18,
    right:"30%",
  },
});

export default FeedbackScreen;
