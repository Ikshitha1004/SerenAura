import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import DateRow from './Daterow'; // Import the DateRow component

const SleepTracker = () => {
  const [sleepData, setSleepData] = useState({
    dailySleep: Array(10).fill(0).map((_, i) => (i + 1) * 0.5),
    dates: Array.from({ length: 10 }, (_, i) => `2024-08-${i + 1}`),
    selectedDaySleep: 6.5,
    selectedDate: '2024-08-10',
  });

  const handleDatePress = (index) => {
    setSleepData((prevState) => ({
      ...prevState,
      selectedDaySleep: prevState.dailySleep[index],
      selectedDate: prevState.dates[index],
    }));
  };

  return (
    <View style={styles.container}>
      <DateRow dates={sleepData.dates} handleDatePress={handleDatePress} />

      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{sleepData.selectedDaySleep}h</Text>
          <Text style={styles.circleSubText}>Sleep on {sleepData.selectedDate}</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.graphContainer}>
        <LineChart
          data={{
            labels: sleepData.dates.map(date => {
              const formattedDate = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
              return formattedDate;
            }),
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink', // Dark background color
  },
  circleContainer: {
    marginBottom: 20,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 10,
    backgroundColor: '#282C34', // Dark blue circle
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
    width: Dimensions.get('window').width * 1.5, // Adjust width to fit all dates
    height: 220,
    marginVertical: 20,
  },
});

export default SleepTracker;
