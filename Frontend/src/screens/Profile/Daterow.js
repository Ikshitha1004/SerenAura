import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const DateRow = ({ dates, handleDatePress }) => {
  // Helper function to format date into "MMM dd" format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date format: ${dateString}`);
      return '';
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
    height: 60, 
    marginTop: 10, 
  },
  datesContainer: {
    alignItems: 'center', 
    paddingHorizontal: 5, 
  },
  dateButton: {
    marginRight: 10, 
    paddingHorizontal: 50, 
    backgroundColor: '#444', 
    borderRadius: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: '#fff',
    fontSize: 12, 
  },
});

export default DateRow;
