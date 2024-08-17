import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Entypo, FontAwesome6 } from '@expo/vector-icons'; // Importing FontAwesome and Entypo icons from Expo Vector Icons

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Sheenu</Text>

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

      <View style={styles.eventContainer}>
        <View style={[styles.eventCard, styles.eventCard1]}>
          <View style={styles.eventIconContainer}>
            <Image source={require('../../assets/DashBoardIcons/Community.png')} style={styles.eventIcon} />
          </View>
          <View style={styles.eventTextContainer}>
            <Text style={styles.eventTitle}>Community Gathering</Text>
            <Text style={styles.eventDescription}>Let's open up to the thing that matters among the people</Text>
          </View>
        </View>

        <View style={[styles.eventCard, styles.eventCard2]}>
          <View style={styles.eventIconContainer}>
            <Image source={require('../../assets/DashBoardIcons/Aura.png')} style={styles.eventIcon} />
          </View>
          <View style={styles.eventTextContainer}>
            <Text style={styles.eventTitle}>Motivation</Text>
            <Text style={styles.eventDescription}>Aura is the most important thing that matters to you. Join us on...</Text>
          </View>
        </View>
      </View>

      <View style={styles.footerIconsContainer}>
        <Entypo name="home" size={30} color="#000" style={styles.footerIcon} />
        <Entypo name="cog" size={30} color="#000" style={styles.footerIcon} />
        <FontAwesome6 name="jar" size={30} color="#000" style={styles.footerIcon} />
        <Entypo name="users" size={30} color="#000" style={styles.footerIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  profileIcon: {
    position: 'absolute',
    right: 0,
    margintop: 0,
    padding: 0,
  },
  iconScrollContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    width: 70, // Increased icon size
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  eventContainer: {
    marginTop: 10,
  },
  eventCard: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 40,
    marginBottom: 30,
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
    height: 50,
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
