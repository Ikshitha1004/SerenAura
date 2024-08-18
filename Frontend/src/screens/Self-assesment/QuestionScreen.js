import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import questions from "../../data/questions";


export default function QuestionScreen({ route, navigation }) {
  const { questionIndex } = route.params;

  // State to keep track of selected options for each question
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );

  // Set the selected option for the current question
  const handleOptionSelect = (index) => {
    const updatedSelections = [...selectedOptions];
    updatedSelections[questionIndex] = index;
    setSelectedOptions(updatedSelections);
  };

  // Calculate the mental wellness score
  const calculateScore = () => {
    return selectedOptions.reduce((total, optionIndex, i) => {
      if (optionIndex !== null) {
        const questionType = questions[i].type;
        if (questionType === "negative") {
          return total + (optionIndex + 1); // Ascending order: '1', '2', '3', '4'
        } else if (questionType === "positive") {
          return total + (4 - optionIndex); // Descending order: '4', '3', '2', '1'
        }
      }
      return total;
    }, 0);
  };

  const handleNext = () => {
    if (selectedOptions[questionIndex] === null) {
      // Show warning if the current question is not answered
      Alert.alert("Warning", "Please select an option before proceeding.");
    } else {
      if (questionIndex < questions.length - 1) {
        navigation.navigate("Question", { questionIndex: questionIndex + 1 });
      } else {
        const score = calculateScore();
        navigation.navigate("Result", { score }); // Passing the score to the ResultScreen
      }
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      navigation.navigate("Question", { questionIndex: questionIndex - 1 });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        {questions[questionIndex].question}
      </Text>
      <View style={styles.optionsContainer}>
        {questions[questionIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOptions[questionIndex] === index && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect(index)}
          >
            <Text
              style={[
                styles.optionText,
                selectedOptions[questionIndex] === index && styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {questionIndex > 0 && (
          <TouchableOpacity style={styles.button} onPress={handlePrevious}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {questionIndex === questions.length - 1 ? "Submit" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  questionText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#000000",
    textAlign: "center",
  },
  optionsContainer: {
    marginVertical: 20,
  },
  optionButton: {
    backgroundColor: '#E6E6FA',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: '#FC6C85',
    borderColor: '#FC6C85',
  },
  optionText: {
    fontSize: 16,
    color: '#000000',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#FC6C85",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
