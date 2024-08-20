import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { db } from '../../configs/firebaseConfig'; // Adjust the path as needed
import { doc, updateDoc } from 'firebase/firestore';

const CommunityScreen = () => {
  const [events, setEvents] = useState([
    { id: '1', title: 'Yoga Session', description: 'Morning yoga at the park', date: '2024-08-18', location: 'Tirupati', joined: false },
    { id: '2', title: 'Music Concert', description: 'Live concert downtown', date: '2024-08-20', location: 'Tirupati', joined: false },
    { id: '3', title: 'Book Club', description: 'Discussing the latest novel', date: '2024-08-22', location: 'Tirupati', joined: false },
  ]);

  const [userEvents, setUserEvents] = useState([]); // State for user events
  const [userLocation, setUserLocation] = useState(null); // State for user location
  const [locationError, setLocationError] = useState(null); // State for location errors

  const navigation = useNavigation();

  useEffect(() => {
    const getUserLocation = async () => {
      // Request location permission
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'You need to enable location services to use this feature.');
        return;
      }

      try {
        // Get current location
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation(location.coords);

        // Reverse geocode to get place name
        const [place] = await Location.reverseGeocodeAsync(location.coords);
        if (place) {
          setUserLocation({
            ...location.coords,
            placeName: `${place.city || ''}, ${place.region || ''}, ${place.country || ''}`,
          });
        }
      } catch (error) {
        setLocationError('Unable to fetch location');
        console.error(error);
      }
    };

    getUserLocation();
  }, []);

  const handleJoinEvent = async (eventId) => {
    try {
      // Update event in Firestore
      const eventRef = doc(db, 'events', eventId);
      await updateDoc(eventRef, { joined: true });

      // Update local state
      setEvents(prevEvents =>
        prevEvents.map(event =>
          event.id === eventId ? { ...event, joined: true } : event
        )
      );

      // Optionally add to user events
      setUserEvents(prevUserEvents => [
        ...prevUserEvents,
        events.find(event => event.id === eventId),
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to join event');
      console.error('Error joining event: ', error);
    }
  };

  const handleAddEvent = () => {
    navigation.navigate('AddEvent', { setEvents, userEvents, setUserEvents });
  };

  const handleViewMyEvents = () => {
    navigation.navigate('MyEvents', { userEvents });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          {userLocation && userLocation.placeName ? (
            <>
              <MaterialIcons name="location-on" size={24} color="#EA2157" />
              <Text style={styles.location}>{userLocation.placeName}</Text>
            </>
          ) : (
            <Text style={styles.location}>{locationError || 'Fetching location...'}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.profileIcon}>
          <Entypo name="user" size={24} color="#EA2157" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.eventsContainer}>
        {events.map((event) => (
          <View key={event.id} style={styles.eventCard}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            <Text style={styles.eventDate}>{event.date}</Text>
            <Text style={styles.eventLocation}>{event.location}</Text>
            {!event.joined ? (
              <TouchableOpacity
                style={styles.joinButton}
                onPress={() => handleJoinEvent(event.id)}
              >
                <Text style={styles.joinButtonText}>Join</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.joinedText}>Joined</Text>
            )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddEvent}>
          <Text style={styles.addButtonText}>Add Event</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.myEventsButton} onPress={handleViewMyEvents}>
          <Text style={styles.myEventsButtonText}>My Events</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eeeeee',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileIcon: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#eeeeee',
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
    fontSize: 17,
    fontWeight: 'bold',
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
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  addButton: {
    backgroundColor: '#FE558C',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginRight: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  myEventsButton: {
    backgroundColor: '#FE558C',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginLeft: 5,
  },
  myEventsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CommunityScreen;
