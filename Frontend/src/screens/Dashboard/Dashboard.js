import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert,Dimensions } from 'react-native';
import { Entypo, FontAwesome6 } from '@expo/vector-icons'; // Importing FontAwesome and Entypo icons from Expo Vector Icons
import { db } from '../../configs/firebaseConfig'; // Adjust the path as needed
import { collection, query, where, getDocs } from 'firebase/firestore';
import MenuButton from '../../components/MenuButton';
const { width, height } = Dimensions.get("window");

const DashboardScreen = ({ navigation }) => {
  const [userEvents, setUserEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleFooterPress = (screen) => {
    navigation.navigate(screen);
  };
  useEffect(() => {
    const fetchUserEvents = async () => {
     
      try {
        // Fetch events user has joined
        const q = query(collection(db, 'events'), where('joined', '==', true));
        const querySnapshot = await getDocs(q);
        const events = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        console.log("Fetched Events: ", events); // Log fetched events

        setUserEvents(events);

        // // Filter events for today
        // const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
        // const todayEvents = events.filter(event => {
        //   const eventDate = event.date?.toDate ? event.date.toDate().toISOString().split('T')[0] : event.date;
        //   return eventDate === today;
        // });
//         const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
//         console.log(today)

// const todayEvents = events.filter(event => {
//   // If event.date is a Firestore Timestamp, convert it to a Date object
//   let eventDate = event.date;
//   if (event.date?.toDate) {
//     eventDate = event.date.toDate().toISOString().split('T')[0];
//   } else if (typeof eventDate === 'string') {
//     eventDate = eventDate.split('T')[0]; // Ensure it's in YYYY-MM-DD format
//   }
  
//   return eventDate === today;
// });
        console.log("Filtered Events: ",events); // Log filtered events

        setFilteredEvents(events);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch events');
        console.error('Error fetching events: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserEvents();
  }, []);

/*Setting while the dashboard loads */
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
        <Text style={styles.greeting}>Hello!Welcome  to Serenaura</Text>
        <TouchableOpacity onPress={() => handleFooterPress("ProfileScreen")}>
        <Entypo
          name="user"
          size={30}
          color="#000"
          style={styles.profileIcon}
        />
      </TouchableOpacity>

        {/* Scrollable Icon Container for dashboard icons*/}
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.iconScrollContainer}
      >
        <TouchableOpacity onPress={() => handleFooterPress("MoodTracker")}>
          <Image
            source={require('../../assets/DashBoardIcons/Brain.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFooterPress("Grounding Techniques")}>
          <Image
            source={require('../../assets/DashBoardIcons/Flower.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFooterPress("JournalList")}>
          <Image
            source={require('../../assets/DashBoardIcons/Journal.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFooterPress("MusicHome")}>
          <Image
            source={require('../../assets/DashBoardIcons/Music.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
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
                {/* <TouchableOpacity style={styles.joinButton} onPress={() => navigation.navigate('EventDetail', { eventId: event.id })}>
                  <Text style={styles.joinButtonText}>Join Now</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noEventsText}>No events for today</Text>
        )}
      </ScrollView>
      {/*setting up the footer icons */}
      <View style={styles.footerIconsContainer}>
        <TouchableOpacity onPress={() => handleFooterPress("Dashboard")}>
          <Entypo name="home" size={30} color="#000" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFooterPress("Community")}>
          <Entypo name="users" size={30} color="#000" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFooterPress("GratitudeJarScreen")}>
          <FontAwesome6 name="jar" size={30} color="#000" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFooterPress('Settings')}>
          <Entypo name="cog" size={30} color="#000" style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: width*0.05,
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
   left:"45%",
    right:30,
    top:"-400%"
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
    right: width * 0.05, // Adjusted for better fit
    top: 100,
    left: width * 0.0, 
    width: width * 0.9, 
    overflow: 'hidden', 
  },
  icon: {
    width: width*0.13,
    height: 70,
    borderRadius: 35,
    marginRight: width*0.07,
    left: 40,
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
    backgroundColor: '#FF4081', 
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
    marginTop: 'auto', 
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
