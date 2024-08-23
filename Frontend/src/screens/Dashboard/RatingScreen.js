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
  const submit_handler = () => {
    Alert.alert(
      "Thank you for your feedback!",
      `You rated us ${rating} star(s).`
    );
    navigation.goBack();
  };
  const rating_handler = (rate) => {
    setRating(rate);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Us</Text>
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => rating_handler(star)}>
            <Ionicons
              name={rating >= star ? "star" : "star-outline"}
              size={40}
              color={rating >= star ? "#FFD700" : "#CCCCCC"}
            />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={submit_handler}>
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
    backgroundColor: "#eeeeee",
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
    backgroundColor: "#fc6c85",
    padding: 10,
    borderRadius: 5,
    width: "40%",
  },
  submitText: {
    color: "#000000",
    fontSize: 18,
    left: 30,
  },
});

export default RatingScreen;
