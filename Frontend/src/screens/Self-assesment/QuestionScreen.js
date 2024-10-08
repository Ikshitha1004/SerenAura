import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import questions from "../../data/questions";
import { auth, db } from "../../configs/firebaseConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export default function QuestionScreen({ route, navigation }) {
  const { queIndex } = route.params;

  const [selectedOptions, selectedOptionsSet] = useState(
    Array(questions.length).fill(null)
  );
  const handleOptionSelect = (index) => {
    const updatedSelections = [...selectedOptions];
    updatedSelections[queIndex] = index;
    selectedOptionsSet(updatedSelections);
  };

  const calculateScore = () => {
    return selectedOptions.reduce((total, optionIndex, i) => {
      if (optionIndex !== null) {
        const questionType = questions[i].type;
        if (questionType === "negative") {
          return total + (optionIndex + 1);
        } else if (questionType === "positive") {
          return total + (4 - optionIndex);
        }
      }
      return total;
    }, 0);
  };

  const storeScoreInDb = async (score) => {
    const user = auth.currentUser;
    if (user) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, {
          scores: arrayUnion({
            score: score,
            timestamp: Date.now(),
          }),
        });
      } catch (error) {
        console.error("Error saving score: ", error);
        Alert.alert("Error", "There was an error saving your score.");
      }
    }
  };

  const handleNext = async () => {
    if (selectedOptions[queIndex] === null) {
      Alert.alert("Warning", "Please select an option before proceeding.");
    } else {
      if (queIndex < questions.length - 1) {
        navigation.navigate("Question", { queIndex: queIndex + 1 });
      } else {
        const score = calculateScore();
        await storeScoreInDb(score);
        navigation.navigate("Result", { score });
      }
    }
  };

  const handlePrev = () => {
    if (queIndex > 0) {
      navigation.navigate("Question", { queIndex: queIndex - 1 });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{questions[queIndex].question}</Text>
      <View style={styles.optionsContainer}>
        {questions[queIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOptions[queIndex] === index && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect(index)}
          >
            <Text
              style={[
                styles.optionText,
                selectedOptions[queIndex] === index &&
                  styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {queIndex > 0 && (
          <TouchableOpacity style={styles.button} onPress={handlePrev}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {queIndex === questions.length - 1 ? "Submit" : "Next"}
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
    backgroundColor: "#E6E6FA",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: "#FC6C85",
    borderColor: "#FC6C85",
  },
  optionText: {
    fontSize: 16,
    color: "#000000",
  },
  selectedOptionText: {
    color: "#FFFFFF",
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
