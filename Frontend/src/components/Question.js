import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Question({
  question,
  options,
  selectedOption,
  setSelectedOption,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => setSelectedOption(index)}
        >
          <View style={styles.circle}>
            {selectedOption === index && <View style={styles.dot} />}
          </View>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  questionText: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  optionText: {
    fontSize: 18,
    color: "#fff",
  },
});