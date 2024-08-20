import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { Entypo, FontAwesome6 } from '@expo/vector-icons'; // Importing FontAwesome and Entypo icons from Expo Vector Icons
import { db } from '../../configs/firebaseConfig'; // Adjust the path as needed
import { collection, query, where, getDocs } from 'firebase/firestore';
import MenuButton from '../../components/MenuButton';

const DashboardScreen = ({ navigation }) => {
  const [userEvents, setUserEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        // Fetch events user has joined
        const q = query(collection(db, 'events'), where('joined', '==', true));
        const querySnapshot = await getDocs(q);
        const events = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserEvents(events);

        // Filter events for today
        const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
        const todayEvents = events.filter(event => event.date === today);
        setFilteredEvents(todayEvents);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch events');
        console.error('Error fetching events: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserEvents();
  }, []);

  const handleFooterPress = (screen) => {
    navigation.navigate(screen);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MenuButton navigation={navigation} />
        <Text style={styles.greeting}>Hello!</Text>

        {/* Profile Icon */}
        <Entypo name="user" size={30} color="#000" style={styles.profileIcon} />

        {/* Scrollable Icon Container */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.iconScrollContainer}>
          <Image source={require('../../assets/DashBoardIcons/Brain.png')} style={styles.icon} />
          <Image source={require('../../assets/DashBoardIcons/Flower.png')} style={styles.icon} />
          <Image source={require('../../assets/DashBoardIcons/Journal.png')} style={styles.icon} />
          <Image source={require('../../assets/DashBoardIcons/Music.png')} style={styles.icon} />
        </ScrollView>
      </View>

      <Text style={styles.taskTitle}>Today's Tasks</Text>

      <ScrollView style={styles.eventContainer}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <View key={event.id} style={[styles.eventCard, styles.eventCard2]}>
              <View style={styles.eventIconContainer}>
                <Image source={require('../../assets/DashBoardIcons/Aura.png')} style={styles.eventIcon} />
              </View>
              <View style={styles.eventTextContainer}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDescription}>{event.description}</Text>
                <TouchableOpacity style={styles.joinButton} onPress={() => navigation.navigate('EventDetail', { eventId: event.id })}>
                  <Text style={styles.joinButtonText}>Join Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noEventsText}>No events for today</Text>
        )}
      </ScrollView>

      <View style={styles.footerIconsContainer}>
        <TouchableOpacity onPress={() => handleFooterPress('Community')}>
          <Entypo name="home" size={30} color="#000" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFooterPress('Settings')}>
          <Entypo name="cog" size={30} color="#000" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFooterPress('GratitudeJar')}>
          <FontAwesome6 name="jar" size={30} color="#000" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFooterPress('Users')}>
          <Entypo name="users" size={30} color="#000" style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
  },
  header: {
    alignItems: 'center',
    marginBottom: 110,
    
    position: 'relative',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  profileIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  menuIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  iconScrollContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    position: 'absolute',
    right: 40,
    top: 100,
  },
  icon: {
    width: 70, // Increased icon size
    height: 70,
    borderRadius: 35,
    marginRight: 39,
    left: 50,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 100,
    alignSelf: 'flex-start',
  },
  eventContainer: {
    marginTop: 10,
  },
  eventCard: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  eventCard1: {
    backgroundColor: '#FCE4EC', // Light pink background color
  },
  eventCard2: {
    backgroundColor: '#880E4F', // Dark background color
  },
  eventIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  eventIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  eventTextContainer: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFFFFF',
  },
  eventDescription: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  joinButton: {
    marginTop: 10,
    backgroundColor: '#FF4081', // Button background color
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  noEventsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  footerIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto', // Pushes the footer to the bottom
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  footerIcon: {
    padding: 10,
  },
});

export default DashboardScreen;
