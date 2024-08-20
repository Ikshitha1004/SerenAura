import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MyEventsScreen = ({ route }) => {
  const { userEvents } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Events</Text>
      <ScrollView style={styles.eventsContainer}>
        {userEvents.length === 0 ? (
          <Text style={styles.noEvents}>No events found.</Text>
        ) : (
          userEvents.map((event) => (
            <View key={event.id} style={styles.eventCard}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDescription}>{event.description}</Text>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventLocation}>{event.location}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  eventsContainer: {
    flex: 1,
  },
  eventCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  eventDescription: {
    fontSize: 14,
    color: '#1c1c1c',
    marginVertical: 5,
  },
  eventDate: {
    fontSize: 12,
    color: '#4d4d4d',
  },
  eventLocation: {
    fontSize: 12,
    color: '#4d4d4d',
  },
  noEvents: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: "70%",
  },
});

export default MyEventsScreen;
