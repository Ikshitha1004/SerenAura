import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const DateRow = ({ dates, handleDatePress }) => {
  // Helper function to format date into "MMM dd" format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date format: ${dateString}`);
      return ''; // Return an empty string if date is invalid
    }
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.datesContainer}>
        {dates.map((date, index) => (
          <TouchableOpacity key={index} onPress={() => handleDatePress(index)} style={styles.dateButton}>
            <Text style={styles.dateText}>{formatDate(date)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60, // Fixed height to fit the buttons
    marginTop: 10, // Adjusted margin
  },
  datesContainer: {
    alignItems: 'center', // Center align items
    paddingHorizontal: 5, // Reduced horizontal padding
  },
  dateButton: {
    marginRight: 10, // Reduced margin between buttons
    paddingHorizontal: 50, // Reduced horizontal padding
    paddingVertical: 4, // Reduced vertical padding
    backgroundColor: '#444', // Button background color
    borderRadius: 5,
    height: 60, // Reduced height of the button
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: '#fff',
    fontSize: 12, // Font size for the date text
  },
});

export default DateRow;
