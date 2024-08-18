import React, { useState } from "react";
import { View, Button, StyleSheet, Alert } from "react-native";
import Question from "../components/Question";
import questions from "../data/questions";

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
      <Question
        question={questions[questionIndex].question}
        options={questions[questionIndex].options}
        selectedOption={selectedOptions[questionIndex]}
        setSelectedOption={handleOptionSelect}
      />
      <View style={styles.buttonContainer}>
        {questionIndex > 0 && (
          <Button title="Previous" onPress={handlePrevious} />
        )}
        <Button
          title={questionIndex === questions.length - 1 ? "Submit" : "Next"}
          onPress={handleNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#2D3748",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
