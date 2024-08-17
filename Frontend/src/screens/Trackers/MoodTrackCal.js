import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
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
          dotColor: "transparent",
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

  const handleDayPress = async (day) => {
    if (!userId) {
      Alert.alert(
        "Not logged in",
        "You need to be logged in to record your mood."
      );
      return;
    }

    const today = day.dateString;
    const moodRef = doc(db, "moods", userId, "moodData", today);

    const moodDoc = await getDoc(moodRef);
    if (moodDoc.exists()) {
      Alert.alert(
        "Mood Already Recorded",
        "You have already recorded your mood today!"
      );
      return;
    }

    const mood = "happy"; // Replace with mood input logic

    await setDoc(moodRef, {
      userId,
      date: today,
      mood,
    });
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
                backgroundColor: "white",
              },
              text: {
                fontSize: 18,
                textAlign: "center",
              },
            },
            text: markedDates[key].emoji,
          };
          return acc;
        }, {})}
        theme={{
          todayTextColor: "red",
          arrowColor: "orange",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CalendarScreen;
