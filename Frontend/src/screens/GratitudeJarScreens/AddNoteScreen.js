// import React, { useState } from 'react';
// import { View, TextInput, Image, StyleSheet, Alert, TouchableOpacity, Text, Platform } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { Feather } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Video } from 'expo-av'; // Correct import for video

// const AddNoteScreen = ({ navigation }) => {
//   const [noteText, setNoteText] = useState('');
//   const [mediaUri, setMediaUri] = useState(null);
//   const [mediaType, setMediaType] = useState(null); // Store the type of media (image or video)
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleAddNote = () => {
//     if (noteText.trim() === '' && !mediaUri) {
//       Alert.alert('Please add some text, an image, or a video');
//       return;
//     }

//     const newNote = { text: noteText, media: { uri: mediaUri, type: mediaType }, date: date.toLocaleDateString() };
//     setNoteText(''); // Clear the input field
//     setMediaUri(null); // Clear the selected media
//     setMediaType(null); // Clear the media type
//     setDate(new Date()); // Reset the date
//     navigation.navigate('GratitudeJarScreen', { newNote });
//   };

//   const pickMedia = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       Alert.alert("Permission to access media is required!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All, // Allow both images and videos
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled && result.assets && result.assets[0]) {
//       setMediaUri(result.assets[0].uri);
//       setMediaType(result.assets[0].type); // Set the media type ('image' or 'video')
//     }
//   };

//   const onDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(Platform.OS === 'ios'); // Hide date picker on Android after selection
//     setDate(currentDate);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Write your note here..."
//         value={noteText}
//         onChangeText={setNoteText}
//       />
//       <TouchableOpacity onPress={pickMedia} style={styles.iconButton}>
//         <Feather name="image" size={30} color="gray" />
//       </TouchableOpacity>
//       {/* Display image or video */}
//       {mediaUri && mediaType === 'image' && <Image source={{ uri: mediaUri }} style={styles.media} />}
//       {mediaUri && mediaType === 'video' && (
//         <Video
//           source={{ uri: mediaUri }}
//           style={styles.media}
//           useNativeControls
//           resizeMode="contain"
//           shouldPlay={false}
//         />
//       )}
      
//       <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
//         <Feather name="calendar" size={24} color="gray" />
//         <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
//       </TouchableOpacity>

//       {showDatePicker && (
//         <DateTimePicker
//           value={date}
//           mode="date"
//           display="default"
//           onChange={onDateChange}
//         />
//       )}
      
//       <TouchableOpacity onPress={handleAddNote} style={styles.addButton}>
//         <Feather name="check-circle" size={30} color="blue" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   input: {
//     width: '80%',
//     padding: 10,
//     marginBottom: 20,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   iconButton: {
//     marginVertical: 20,
//   },
//   media: {
//     width: 200,
//     height: 200,
//     marginVertical: 20,
//     borderRadius: 10,
//   },
//   dateButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   dateText: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   addButton: {
//     marginTop: 20,
//   },
// });

// export default AddNoteScreen;

//code for singlr image/video

// import React, { useState } from 'react';
// import { View, TextInput, Image, StyleSheet, Alert, TouchableOpacity, Text, Platform, ScrollView } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { Feather } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Video } from 'expo-av';

// const AddNoteScreen = ({ navigation }) => {
//   const [noteText, setNoteText] = useState('');
//   const [mediaUri, setMediaUri] = useState(null);
//   const [mediaType, setMediaType] = useState(null);
//   const [date, setDate] = useState(new Date());
//   const [showDate, setShowDate] = useState(false);

//   const handleAddNote = () => {
//     if (noteText.trim() === '' && !mediaUri) {
//       Alert.alert('Please add some text, or an image, or a video');
//       return;
//     }

//     const newNote = { text: noteText, media: { uri: mediaUri, type: mediaType }, date: date.toLocaleDateString() };
//     setNoteText('');
//     setMediaUri(null);
//     setMediaType(null);
//     setDate(new Date());
//     navigation.navigate('GratitudeJarScreen', { newNote });
//   };

//   const pickMedia = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       Alert.alert("Permission to access media is required!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled && result.assets && result.assets[0]) {
//       setMediaUri(result.assets[0].uri);
//       setMediaType(result.assets[0].type);
//     }
//   };

//   const onDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDate(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Date Picker Section */}
//       <TouchableOpacity onPress={() => setShowDate(true)} style={styles.dateButton}>
//         <Feather name="calendar" size={24} color="#4a4a4a" />
//         <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
//       </TouchableOpacity>

//       {showDate && (
//         <DateTimePicker
//           value={date}
//           mode="date"
//           display="default"
//           onChange={onDateChange}
//         />
//       )}

//       {/* Note Input Section */}
//       <TextInput
//         style={styles.input}
//         placeholder="Write your note here..."
//         value={noteText}
//         onChangeText={setNoteText}
//         multiline
//       />

//       {/* Image/Video Picker Section */}
//       <TouchableOpacity onPress={pickMedia} style={styles.iconButton}>
//         <Feather name="image" size={30} color="#4a4a4a" />
//         <Text style={styles.iconButtonText}>Add an image or video</Text>
//       </TouchableOpacity>

//       {/* Display Selected Media */}
//       {mediaUri && mediaType === 'image' && <Image source={{ uri: mediaUri }} style={styles.media} />}
//       {mediaUri && mediaType === 'video' && (
//         <Video
//           source={{ uri: mediaUri }}
//           style={styles.media}
//           useNativeControls
//           resizeMode="contain"
//           shouldPlay={false}
//         />
//       )}

//       {/* Add Note Button */}
//       <TouchableOpacity onPress={handleAddNote} style={styles.addButton}>
//         <Feather name="check-circle" size={30} color="white" />
//         <Text style={styles.addButtonText}>Add Note</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   dateButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#e3e3e3',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   dateText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#4a4a4a',
//   },
//   input: {
//     width: '100%',
//     padding: 15,
//     borderColor: '#d1d1d1',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 20,
//     fontSize: 16,
//     backgroundColor: '#fff',
//     textAlignVertical: 'top',
//     minHeight: 100,
//   },
//   iconButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#e3e3e3',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   iconButtonText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#4a4a4a',
//   },
//   media: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   addButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 15,
//     backgroundColor: '#4a90e2',
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   addButtonText: {
//     marginLeft: 10,
//     fontSize: 18,
//     color: 'white',
//   },
// });

// export default AddNoteScreen;

//  Code for multiple image/video

// import React, { useState } from 'react';
// import { View, TextInput, Image, StyleSheet, Alert, ScrollView, TouchableOpacity, Text } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { Feather } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const AddNoteScreen = ({ navigation }) => {
//   const [noteText, setNoteText] = useState('');
//   const [mediaUris, setMediaUris] = useState([]); // Store multiple media URIs
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleAddNote = () => {
//     if (noteText.trim() === '' && mediaUris.length === 0) {
//       Alert.alert('Please add some text or media');
//       return;
//     }

//     const newNote = { text: noteText, media: mediaUris, date: date.toLocaleDateString() };
//     setNoteText('');
//     setMediaUris([]);
//     setDate(new Date());
//     navigation.navigate('GratitudeJarScreen', { newNote });
//   };

//   const pickMedia = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       Alert.alert("Permission to access camera roll is required!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All, // Allow both images and videos
//       allowsMultipleSelection: true, // Allow selecting multiple files
//       quality: 1,
//     });

//     if (!result.canceled && result.assets) {
//       const newMediaUris = result.assets.map(asset => asset.uri);
//       setMediaUris([...mediaUris, ...newMediaUris]); // Add new media URIs to the state
//     }
//   };

//   const onDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(false);
//     setDate(currentDate);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Write your note here..."
//         value={noteText}
//         onChangeText={setNoteText}
//       />
//       <TouchableOpacity onPress={pickMedia} style={styles.iconButton}>
//         <Feather name="image" size={30} color="gray" />
//         <Text style={styles.buttonText}>Add Media</Text>
//       </TouchableOpacity>

//       <ScrollView horizontal style={styles.mediaContainer}>
//         {mediaUris.map((uri, index) => (
//           <Image key={index} source={{ uri }} style={styles.media} />
//         ))}
//       </ScrollView>

//       <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
//         <Feather name="calendar" size={24} color="gray" />
//         <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
//       </TouchableOpacity>

//       {showDatePicker && (
//         <DateTimePicker
//           value={date}
//           mode="date"
//           display="default"
//           onChange={onDateChange}
//         />
//       )}

//       <TouchableOpacity onPress={handleAddNote} style={styles.addButton}>
//         <Feather name="check-circle" size={30} color="blue" />
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingBottom: 20,
//   },
//   input: {
//     width: '80%',
//     padding: 10,
//     marginBottom: 20,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   iconButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   buttonText: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   mediaContainer: {
//     flexDirection: 'row',
//     marginVertical: 20,
//   },
//   media: {
//     width: 100,
//     height: 100,
//     marginRight: 10,
//     borderRadius: 10,
//   },
//   dateButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   dateText: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   addButton: {
//     marginTop: 20,
//   },
// });

// export default AddNoteScreen;
// Final is above one

import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Alert, TouchableOpacity, Text, Platform, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Video } from 'expo-av';

const AddNoteScreen = ({ navigation }) => {
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [mediaUri, setMediaUri] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const handleAddNote = () => {
    if (noteText.trim() === '' && !mediaUri) {
      Alert.alert('Please add some text, or an image, or a video');
      return;
    }

    const newNote = { title: noteTitle, text: noteText, media: { uri: mediaUri, type: mediaType }, date: date.toLocaleDateString() };
    setNoteText('');
    setNoteTitle('');
    setMediaUri(null);
    setMediaType(null);
    setDate(new Date());
    navigation.navigate('GratitudeJarScreen', { newNote });
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
      {/* Date Picker Section */}
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

      {/* Title Input Section */}
      <TextInput
        style={styles.titleInput}
        placeholder="Note Title (optional)"
        value={noteTitle}
        onChangeText={setNoteTitle}
      />

      {/* Note Input Section */}
      <TextInput
        style={styles.input}
        placeholder="Write your note here..."
        value={noteText}
        onChangeText={setNoteText}
        multiline
      />

      {/* Image/Video Picker Section */}
      <TouchableOpacity onPress={pickMedia} style={styles.iconButton}>
        <Feather name="image" size={30} color="#4a4a4a" />
        <Text style={styles.iconButtonText}>Add an image or video</Text>
      </TouchableOpacity>

      {/* Display Selected Media */}
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

      {/* Add Note Button */}
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
    backgroundColor: '#f9f9f9',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#e3e3e3',
    borderRadius: 8,
    marginBottom: 20,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4a4a4a',
  },
  titleInput: {
    width: '100%',
    padding: 15,
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#d1d1d1',
    borderWidth: 1,
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
    backgroundColor: '#e3e3e3',
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
    backgroundColor: '#4a90e2',
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
