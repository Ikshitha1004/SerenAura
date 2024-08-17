import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { db } from "../../configs/firebaseConfig"; // Your Firebase config file
import {
  collection,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const moodEmojis = {
  happy: "😊",
  sad: "😢",
  moody: "😐",
};

const CalendarScreen = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [userId, setUserId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  useEffect(() => {
    if (!userId) return; // Exit early if userId is not available

    const moodRef = collection(db, "moods", userId, "moodData");

    const unsubscribe = onSnapshot(moodRef, (snapshot) => {
      const updatedDates = {};
      snapshot.forEach((doc) => {
        const { date, mood } = doc.data();
        updatedDates[date] = {
          marked: true,
          customStyles: {
            container: {
              backgroundColor: "white",
            },
            text: {
              fontSize: 18,
            },
          },
          emoji: moodEmojis[mood],
        };
      });
      setMarkedDates(updatedDates);
    });

    return () => unsubscribe();
  }, [userId]);

  const handleDayPress = (day) => {
    if (!userId) {
      Alert.alert(
        "Not logged in",
        "You need to be logged in to record your mood."
      );
      return;
    }

    const today = day.dateString;
    setSelectedDate(today);
    setShowEmojis(true); // Show emoji options when a date is pressed
  };

  const handleEmojiSelect = async (mood) => {
    if (!selectedDate || !userId) return;

    const moodRef = doc(db, "moods", userId, "moodData", selectedDate);

    const moodDoc = await getDoc(moodRef);
    if (moodDoc.exists()) {
      Alert.alert(
        "Mood Already Recorded",
        "You have already recorded your mood today!"
      );
      return;
    }

    await setDoc(moodRef, {
      userId,
      date: selectedDate,
      mood,
    });

    // Update the markedDates state to display the emoji
    setMarkedDates((prevMarkedDates) => ({
      ...prevMarkedDates,
      [selectedDate]: {
        marked: true,
        customStyles: {
          container: {
            backgroundColor: "lavender",
          },
          text: {
            fontSize: 18,
            textAlign: "center",
          },
        },
        emoji: moodEmojis[mood],
      },
    }));

    setShowEmojis(false); // Hide emoji options after selection
    setSelectedDate(null);
  };

  if (!userId) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Please log in to view your mood calendar.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Calendar</Text>
      <Calendar
        onDayPress={handleDayPress}
        markingType={"custom"}
        markedDates={Object.keys(markedDates).reduce((acc, key) => {
          acc[key] = {
            ...markedDates[key],
            customStyles: {
              container: {
                backgroundColor: "lavender",
              },
              text: {
                fontSize: 18,
                textAlign: "center",
              },
            },
            text: markedDates[key].emoji, // Display emoji in place of the date
          };
          return acc;
        }, {})}
        theme={{
          todayTextColor: "red",
          arrowColor: "orange",
        }}
      />

      {showEmojis && (
        <View style={styles.emojiContainer}>
          {Object.keys(moodEmojis).map((mood) => (
            <TouchableOpacity
              key={mood}
              onPress={() => handleEmojiSelect(mood)}
              style={styles.emojiButton}
            >
              <Text style={styles.emoji}>{moodEmojis[mood]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#967bb6",
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "Poppins_700Bold",
    color: "lavender",
  },
  emojiContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  emojiButton: {
    marginHorizontal: 10,
  },
  emoji: {
    fontSize: 40,
  },
});

export default CalendarScreen;
