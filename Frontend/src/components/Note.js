
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Video } from 'expo-av';

const screenWidth = Dimensions.get('window').width;

const Note = ({ note }) => {
  return (
    <View style={styles.noteContainer}>
      {/* Header Section with Date and Title */}
      <View style={styles.headerContainer}>
        <View style={styles.dateContainer}>
          <Feather name="calendar" size={20} color="gray" />
          <Text style={styles.dateText}>{note.date}</Text>
        </View>

        {/* Title Section */}
        {note.title ? (
          <Text style={styles.titleText}>{note.title}</Text>
        ) : (
          <View style={styles.titlePlaceholder} />
        )}
      </View>

      {/* Display Image or Video */}
      {note.media && note.media.type === 'image' && (
        <Image
          source={{ uri: note.media.uri }}
          style={styles.noteImage}
          resizeMode="contain"
        />
      )}
      {note.media && note.media.type === 'video' && (
        <Video
          source={{ uri: note.media.uri }}
          style={styles.noteVideo}
          useNativeControls
          resizeMode="contain"
          shouldPlay={false}
        />
      )}

      {/* Note Text */}
      <Text style={styles.noteText}>{note.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    flex: 1,
    position: 'relative',
  },
  headerContainer: {
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  dateText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  titlePlaceholder: {
    height: 20, // Adjust height to match the title space
  },
  noteImage: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.5,
    marginVertical: 15,
    borderRadius: 10,
  },
  noteVideo: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.5,
    marginVertical: 15,
    borderRadius: 10,
  },
  noteText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default Note;

