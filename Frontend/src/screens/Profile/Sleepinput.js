import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { getAuth } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/firebaseConfig';
import { Calendar } from 'react-native-calendars';

const SleepDataInputScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [newSleepHours, setNewSleepHours] = useState('');

  const handleSave = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      Alert.alert('Error', 'You are not authorized');
      return;
    }

    if (!newSleepHours) {
      Alert.alert('Error', 'Please enter the number of sleep hours');
      return;
    }

    if (!selectedDate) {
      Alert.alert('Error', 'No date selected');
      return;
    }

    const sleepDataRef = doc(db, 'users', currentUser.uid, 'sleepData', selectedDate);

    try {
      const docSnap = await getDoc(sleepDataRef);
      let sleepData = [];

      if (docSnap.exists()) {
        const data = docSnap.data();
        sleepData = data.sleepData || [];
      }

      sleepData.push(parseFloat(newSleepHours));

      if (sleepData.length > 10) {
        sleepData.shift();
      }

      await setDoc(sleepDataRef, { sleepData });

      Alert.alert('Success', 'Sleep data saved successfully');
      setNewSleepHours('');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to save sleep data');
      console.error('Error saving sleep data: ', error);
    }
  };

  // Generate last 10 days
  const generateLast10Days = () => {
    const days = {};
    for (let i = 0; i < 10; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateString = date.toISOString().split('T')[0];
      days[dateString] = {
        disabled: false,
        marked: true, // To mark them on the calendar
      };
    }
    return days;
  };

  const last10Days = generateLast10Days();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Sleep Data</Text>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          ...last10Days,
          [selectedDate]: { selected: true, marked: true },
        }}
        theme={{
          selectedDayBackgroundColor: '#FF69B4',
          selectedDayTextColor: '#fff',
        }}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter hours"
        placeholderTextColor="#ccc"
        value={newSleepHours}
        onChangeText={setNewSleepHours}
      />
      <Button title="Save" onPress={handleSave} />
      <TouchableOpacity
        style={styles.trackButton}
        onPress={() => navigation.navigate('SleepTracker')}
      >
        <Text style={styles.trackButtonText}>Track Sleep Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#282C34',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#fff',
  },
  trackButton: {
    marginTop: 20,
    backgroundColor: '#FF69B4',
    padding: 10,
    borderRadius: 5,
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SleepDataInputScreen;
