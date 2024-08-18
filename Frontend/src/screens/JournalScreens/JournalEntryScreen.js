import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { db } from "../../configs/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const moodEmojis = ["😃", "😢", "😠", "😕", "😴"]; // Array of mood emojis

const JournalEntryScreen = ({ route, navigation }) => {
  const { onSave } = route.params || {}; // Callback function from params
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selectedMood, setSelectedMood] = useState(null); // Track selected mood
  const [showMoodPicker, setShowMoodPicker] = useState(false); // Control mood picker visibility
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    } else {
      Alert.alert(
        "Not Authorized",
        "You must be logged in to add a journal entry."
      );
      navigation.goBack(); // Navigate back if not authenticated
    }
  }, [navigation]);

  const onChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const saveJournalEntry = async () => {
    if (!user) return; // Ensure user is authenticated

    try {
      await addDoc(collection(db, "journalEntries"), {
        userId: user.uid, // Associate entry with authenticated user
        date: date.toISOString(),
        title: title,
        text: text,
        mood: selectedMood, // Save selected mood
        createdAt: new Date().toISOString(),
      });
      Alert.alert("Success", "Journal entry saved!");
      setTitle("");
      setText("");
      if (onSave) onSave(); // Call the callback to refresh the list
      navigation.goBack(); // Navigate back to the list screen
    } catch (e) {
      console.error("Error adding document: ", e);
      Alert.alert("Error", "Failed to save journal entry. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Emoji and Text */}
      <View style={styles.emojiContainer}>
        <TouchableOpacity
          style={styles.emojiButton}
          onPress={() => setShowMoodPicker(true)}
        >
          <Text style={styles.emojiImage}>
            {selectedMood || "😊"}{" "}
            {/* Display selected mood or default emoji */}
          </Text>
        </TouchableOpacity>
        <Text style={styles.selectMoodText}>Select Mood</Text>
      </View>

      <View style={styles.contentContainer}>
        <Button onPress={() => setShowDatePicker(true)} title="Pick a Date" />
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write your journal entry here..."
          value={text}
          onChangeText={setText}
          multiline
        />
        <Button title="Save Entry" onPress={saveJournalEntry} />
      </View>

      {/* Mood Picker Modal */}
      <Modal visible={showMoodPicker} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.moodPickerContainer}>
            {moodEmojis.map((mood, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedMood(mood); // Set selected mood
                  setShowMoodPicker(false); // Close mood picker
                }}
              >
                <Text style={styles.moodEmoji}>{mood}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  emojiContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  emojiButton: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    padding: 5,
    left: 20,
  },
  emojiImage: {
    fontSize: 40, // Adjust size as needed
  },
  selectMoodText: {
    fontSize: 20,
    marginLeft: 8,
    color: "#333",
    left: 20,
    fontFamily: "Poppins_700Bold",
  },
  contentContainer: {
    marginTop: 5, // Adjust this value if needed
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  moodPickerContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  moodEmoji: {
    fontSize: 30,
  },
});

export default JournalEntryScreen;