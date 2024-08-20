// screens/RatingScreen.js
import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

const RatingScreen = ({ navigation }) => {
  const [rating, setRating] = useState(0);

  // Reset rating when the screen is focused
  useFocusEffect(
    useCallback(() => {
      setRating(0);
    }, [])
  );

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = () => {
    Alert.alert(
      "Thank you for your feedback!",
      `You rated us ${rating} star(s).`
    );
    // Here you can handle submission, e.g., send rating to a server
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Us</Text>
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleRating(star)}>
            <Ionicons
              name={rating >= star ? "star" : "star-outline"}
              size={40}
              color={rating >= star ? "#FFD700" : "#CCCCCC"}
            />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  submitText: {
    color: "white",
    fontSize: 18,
  },
});

export default RatingScreen;
