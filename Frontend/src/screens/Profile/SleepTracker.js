import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Modal, TextInput, Button } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import DateRow from './Daterow'; // Import the DateRow component

const SleepTracker = () => {
  // Generate the last 10 days
  const getLast10Days = () => {
    const today = new Date();
    return Array.from({ length: 10 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      return date.toISOString().split('T')[0]; // Format YYYY-MM-DD
    }).reverse();
  };

  const [sleepData, setSleepData] = useState({
    dailySleep: Array(10).fill(0).map((_, i) => (i + 1) * 0.5),
    dates: getLast10Days(),
    selectedDaySleep: 6.5,
    selectedDate: getLast10Days()[getLast10Days().length - 1],
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newSleepHours, setNewSleepHours] = useState('');

  const handleDatePress = (index) => {
    setSleepData((prevState) => ({
      ...prevState,
      selectedDaySleep: prevState.dailySleep[index],
      selectedDate: prevState.dates[index],
    }));
  };

  const handleProceed = () => {
    const updatedSleepData = [...sleepData.dailySleep];
    const dateIndex = sleepData.dates.indexOf(sleepData.selectedDate);
    updatedSleepData[dateIndex] = parseFloat(newSleepHours);

    setSleepData((prevState) => ({
      ...prevState,
      dailySleep: updatedSleepData,
      selectedDaySleep: parseFloat(newSleepHours),
    }));
    setIsModalVisible(false);
    setNewSleepHours('');
  };

  return (
    <>
      <DateRow dates={sleepData.dates} handleDatePress={handleDatePress} />

      <View style={styles.container}>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>{sleepData.selectedDaySleep}h</Text>
            <Text style={styles.circleSubText}>Sleep on {sleepData.selectedDate}</Text>
          </View>
        </View>

        <ScrollView horizontal>
          <View style={styles.graphContainer}>
            <LineChart
              data={{
                labels: sleepData.dates,
                datasets: [
                  {
                    data: sleepData.dailySleep,
                    color: (opacity = 1) => `rgba(255, 105, 180, ${opacity})`, // Dark pink line color
                  },
                ],
              }}
              width={Dimensions.get('window').width * 1.5} // Adjust width to fit all dates
              height={220}
              yAxisSuffix="h"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#282C34',
                backgroundGradientFrom: '#1E2923',
                backgroundGradientTo: '#08130D',
                decimalPlaces: 1, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 105, 180, ${opacity})`, // Dark pink chart color
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#FF69B4', // Dark pink dot stroke color
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </ScrollView>

        {/* Modal for input */}
        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="fade"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Enter Sleep Hours</Text>
              <TextInput
                style={styles.modalInput}
                keyboardType="numeric"
                placeholder="Enter hours"
                value={newSleepHours}
                onChangeText={setNewSleepHours}
              />
              <View style={styles.modalButtons}>
                <Button title="Proceed" onPress={handleProceed} />
                <Button title="Cancel" onPress={() => setIsModalVisible(false)} color="red" />
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={styles.openModalButton} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.openModalButtonText}>Add Sleep Data</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282C34', // Dark background color
  },
  circleContainer: {
    marginBottom: 20,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 10,
    backgroundColor: '#444', // Dark background circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  circleSubText: {
    color: '#ccc',
    fontSize: 14,
  },
  graphContainer: {
    width: '100%',
    height: 220,
    backgroundColor: '#444', // Dark graph background
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  openModalButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  openModalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SleepTracker;
