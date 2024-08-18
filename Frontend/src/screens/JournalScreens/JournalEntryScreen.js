
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { db } from "../../configs/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const moodEmojis = ["😃", "😢", "😠", "😕", "😴"];

const JournalEntryScreen = ({ route, navigation }) => {
  const { onSave } = route.params || {}; 
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selectedMood, setSelectedMood] = useState(null); 
  const [showMoodPicker, setShowMoodPicker] = useState(false); 
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
      navigation.goBack(); 
    }
  }, [navigation]);

  const onChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const saveJournalEntry = async () => {
    if (!user) return;

    try {
      await addDoc(collection(db, "journalEntries"), {
        userId: user.uid, 
        date: date.toISOString(),
        title: title,
        text: text,
        mood: selectedMood, 
        createdAt: new Date().toISOString(),
      });
      Alert.alert("Success", "Journal entry saved!");
      setTitle("");
      setText("");
      if (onSave) onSave(); 
      navigation.goBack(); 
    } catch (e) {
      console.error("Error adding document: ", e);
      Alert.alert("Error", "Failed to save journal entry. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.emojiContainer}>
        <TouchableOpacity
          style={styles.emojiButton}
          onPress={() => setShowMoodPicker(true)}
        >
          <Text style={styles.emojiImage}>
            {selectedMood || "😊"}{" "}
           
          </Text>
        </TouchableOpacity>
        <Text style={styles.selectMoodText}>Select Mood</Text>
      </View>

      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateButtonText}>Pick a Date</Text>
        </TouchableOpacity>
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
        <TouchableOpacity style={styles.saveButton} onPress={saveJournalEntry}>
          <Text style={styles.saveButtonText}>Save Entry</Text>
        </TouchableOpacity>
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
    marginBottom: 25,
  },
  emojiButton: {
    position: "relative",
    backgroundColor: "#000000",
    borderRadius: 20,
    alignItems: "center",
    padding: 15,
    left: 10,
  },
  emojiImage: {
    fontSize: 30,
    left: 5,
    alignItems: "center",
  },
  selectMoodText: {
    fontSize: 20,
    marginLeft: 8,
    color: "#FC6C85",
    left: 20,
    fontFamily: "Poppins_700Bold",
  },
  contentContainer: {
    marginTop: 10,
  },
  input: {
    height: 70,
    borderColor: "#000000",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  textArea: {
    height: 150,
    textAlignVertical: "center",
  },
  dateButton: {
    backgroundColor: "#FC6C85",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  dateButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
  saveButton: {
    backgroundColor: "#FC6C85",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  moodPickerContainer: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  moodEmoji: {
    fontSize: 30,
  },
});

export default JournalEntryScreen;

