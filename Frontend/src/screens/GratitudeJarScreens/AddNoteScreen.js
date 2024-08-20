import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Alert, TouchableOpacity, Text, Platform, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Video } from 'expo-av';
import { db } from '../../configs/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const AddNoteScreen = ({ navigation }) => {
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [mediaUri, setMediaUri] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const auth = getAuth();
  const currentUser = auth.currentUser;

  const handleAddNote = async () => {
    if (noteText.trim() === '' && !mediaUri) {
      Alert.alert('Please add some text, or an image, or a video');
      return;
    }

    if (!currentUser) {
      Alert.alert('You need to be logged in to save a note');
      return;
    }

    const newNote = {
      title: noteTitle,
      text: noteText,
      media: { uri: mediaUri, type: mediaType },
      date: date.toLocaleDateString(),
      userId: currentUser.uid, 
    };

    try {
      
      await addDoc(collection(db, 'users', currentUser.uid, 'notes'), newNote);

      
      setNoteText('');
      setNoteTitle('');
      setMediaUri(null);
      setMediaType(null);
      setDate(new Date());

      // Navigate back and pass the new note
      navigation.navigate('GratitudeJarScreen', { newNote });
    } catch (error) {
      console.error("Error adding document: ", error);
      Alert.alert("Error", "Something went wrong while saving your note.");
    }
  };

  const pickMedia = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Permission to access media is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets[0]) {
      setMediaUri(result.assets[0].uri);
      setMediaType(result.assets[0].type);
    }
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
  
      <TouchableOpacity onPress={() => setShowDate(true)} style={styles.dateButton}>
        <Feather name="calendar" size={24} color="#4a4a4a" />
        <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {showDate && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

    
      <TextInput
        style={styles.titleInput}
        placeholder="Note Title (optional)"
        value={noteTitle}
        onChangeText={setNoteTitle}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Write your note here..."
        value={noteText}
        onChangeText={setNoteText}
        multiline
      />

    
      <TouchableOpacity onPress={pickMedia} style={styles.iconButton}>
        <Feather name="image" size={30} color="#4a4a4a" />
        <Text style={styles.iconButtonText}>Add an image or video</Text>
      </TouchableOpacity>

    
      {mediaUri && mediaType === 'image' && <Image source={{ uri: mediaUri }} style={styles.media} />}
      {mediaUri && mediaType === 'video' && (
        <Video
          source={{ uri: mediaUri }}
          style={styles.media}
          useNativeControls
          resizeMode="contain"
          shouldPlay={false}
        />
      )}

    
      <TouchableOpacity onPress={handleAddNote} style={styles.addButton}>
        <Feather name="check-circle" size={30} color="white" />
        <Text style={styles.addButtonText}>Add Note</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fc6c85',
    borderRadius: 8,
    marginBottom: 20,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  titleInput: {
    width: '100%',
    padding: 15,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    minHeight: 100,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#',
    borderRadius: 8,
    marginBottom: 20,
  },
  iconButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4a4a4a',
  },
  media: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#000000',
    borderRadius: 8,
    marginTop: 20,
  },
  addButtonText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white',
  },
});

export default AddNoteScreen;
