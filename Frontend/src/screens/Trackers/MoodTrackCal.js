import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { BarChart } from "react-native-chart-kit";
import { db } from "../../configs/firebaseConfig";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import moment from "moment";

const moodEmojis = {
  happy: "😊",
  sad: "😢",
  moody: "😐",
};

const moodColors = {
  happy: "#FFD700",
  sad: "#1E90FF",
  moody: "#32CD32",
};

const CalendarScreen = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [userId, setUserId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [moodCounts, setMoodCounts] = useState({ happy: 0, sad: 0, moody: 0 });
  const [monthLabel, setMonthLabel] = useState("");
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const moodRef = collection(db, "moods", userId, "moodData");

    const unsubscribe = onSnapshot(moodRef, (snapshot) => {
      const updatedDates = {};
      const counts = { happy: 0, sad: 0, moody: 0 };

      const currentMonth = moment().format("YYYY-MM");

      snapshot.forEach((doc) => {
        const { date, mood } = doc.data();
        if (date.startsWith(currentMonth)) {
          updatedDates[date] = {
            marked: true,
            customStyles: {
              container: {
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
              },
              text: {
                fontSize: 20,
                textAlign: "center",
                color: "black",
              },
            },
            text: moodEmojis[mood],
          };

          counts[mood] = (counts[mood] || 0) + 1;
        }
      });

      setMarkedDates(updatedDates);
      setMoodCounts(counts);
      setMonthLabel(moment().format("MMMM YYYY"));
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

    setSelectedDate(today);
    setShowModal(true);
  };

  const handleMoodSelect = async (mood) => {
    if (!selectedDate || !userId) return;

    const moodRef = doc(db, "moods", userId, "moodData", selectedDate);

    await setDoc(moodRef, {
      userId,
      date: selectedDate,
      mood,
    });

    setMarkedDates((prev) => ({
      ...prev,
      [selectedDate]: {
        marked: true,
        customStyles: {
          container: {
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          },
          text: {
            fontSize: 20,
            textAlign: "center",
            color: "black",
          },
        },
        text: moodEmojis[mood],
      },
    }));

    setMoodCounts((prevCounts) => ({
      ...prevCounts,
      [mood]: (prevCounts[mood] || 0) + 1,
    }));

    setShowModal(false);
  };

  const renderDay = (day) => {
    const { dateString } = day;
    const marking = markedDates[dateString];

    return (
      <View style={[styles.dayContainer, marking?.customStyles?.container]}>
        <Text style={[styles.dayText, marking?.customStyles?.text]}>
          {marking?.text || day.day}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Calendar</Text>
      <Calendar
        onDayPress={handleDayPress}
        markingType={"custom"}
        markedDates={markedDates}
        renderDay={renderDay}
        theme={{
          todayTextColor: "red",
          arrowColor: "orange",
        }}
      />

      <Text style={styles.chartTitle}>Mood Track for the present month</Text>
      <BarChart
        data={{
          labels: Object.keys(moodCounts),
          datasets: [
            {
              data: Object.values(moodCounts),
            },
          ],
        }}
        width={350}
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: "#lavender",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          barPercentage: 0.5,
          useShadowColorFromDataset: false,
        }}
        style={styles.chart}
      />

      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Your Mood</Text>
            <View style={styles.moodOptions}>
              {Object.keys(moodEmojis).map((mood) => (
                <TouchableOpacity
                  key={mood}
                  onPress={() => handleMoodSelect(mood)}
                >
                  <Text style={styles.moodText}>{moodEmojis[mood]}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  dayContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
  },
  dayText: {
    fontSize: 20,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  moodOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  moodText: {
    fontSize: 50,
  },
  cancelButton: {
    fontSize: 16,
    color: "red",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  chartTitle: {
    fontSize: 18,
    marginVertical: 10,
    color: "white",
  },
});

export default CalendarScreen;
