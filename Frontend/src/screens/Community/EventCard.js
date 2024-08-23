import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const EventCard = ({ event, onPress, onJoin, joined }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <Text style={styles.location}>{event.location}</Text>
        {!joined ? (
          <TouchableOpacity style={styles.joinButton} onPress={onJoin}>
            <Text style={styles.joinButtonText}>Join</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.joinedText}>Joined</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#4d4d4d',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#1c1c1c',
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: '#4d4d4d',
  },
  joinButton: {
    backgroundColor: '#CED4FA',
    padding: 5, 
    borderRadius: 5,
    alignItems: 'center',
    width: '40%', 
    left: "55%", 
    marginTop: 10,
},
  joinButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  joinedText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default EventCard;
