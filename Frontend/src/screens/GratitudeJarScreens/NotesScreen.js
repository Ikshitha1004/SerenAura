import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Note from '../../components/Note';

const NotesScreen = ({ navigation, route }) => {
  const { notes } = route.params || { notes: [] };

  return (
    <View style={styles.container}>
      {notes.length === 0 ? (
        <Text style={styles.initial}>No notes available. Add a new note!You can save your memories here and revisit them!</Text>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Note note={item} />}
        />
      )}
      <TouchableOpacity
        style={styles.addNoteButton}
        onPress={() => navigation.navigate('AddNoteScreen', { notes })}
      >
        <Text style={styles.button}>Add your memories</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  initial: {
    fontSize: 18,
    color: '#999',
    marginVertical: 20,
  },
  addNoteButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e0bbf3',
    borderRadius: 10,
  },
  button: {
    fontSize: 18,
    color: '#333',
  },
});

export default NotesScreen;


// import React from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import Note from '../components/Note';

// const NotesScreen = ({ navigation, route }) => {
//   const { notes } = route.params || { notes: [] };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={notes}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => <Note note={item} />}
//       />
//       <TouchableOpacity style={styles.addNoteButton} onPress={() => navigation.navigate('AddNoteScreen', { notes })}>
//         <Text style={styles.buttonText}>Add New Note</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   addNoteButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#e0bbf3',
//     borderRadius: 10,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: '#333',
//   },
// });

// export default NotesScreen;

// import React from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
// import { Card, Icon } from 'react-native-elements';
// import Note from '../components/Note';

// const NotesScreen = ({ navigation, route }) => {
//   const { notes } = route.params || { notes: [] };

//   const renderNote = ({ item }) => (
//     <Card containerStyle={styles.card}>
//       <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
//       <View style={styles.cardContent}>
//         <Text style={styles.dateText}>{item.date}</Text>
//         <Icon
//           size={35}
//           name={item.moodIcon}
//           type='font-awesome-5'
//           color={item.moodColor}
//           style={styles.moodIcon}
//         />
//       </View>
//       <Card.Divider />
//       <Text style={styles.noteText}>{item.text}</Text>
//       {item.images && item.images.map((image, index) => (
//         <Image
//           key={index}
//           source={{ uri: image }}
//           style={styles.image}
//           resizeMode='cover'
//         />
//       ))}
//     </Card>
//   );

//   return (
//     <View style={styles.container}>
//       {/* <ScrollView> */}
//         <FlatList
//           data={notes}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={renderNote}
//         />
//       {/* </ScrollView> */}
//       <TouchableOpacity
//         style={styles.addNoteButton}
//         onPress={() => navigation.navigate('AddNoteScreen', { notes })}
//       >
//         <Text style={styles.buttonText}>Add New Note</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   card: {
//     borderRadius: 10,
//     marginBottom: 20,
//     padding: 10,
//     backgroundColor: '#ffffff',
//     elevation: 3,
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   cardContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   dateText: {
//     fontSize: 12,
//     color: '#888888',
//   },
//   moodIcon: {
//     alignSelf: 'center',
//   },
//   noteText: {
//     fontSize: 16,
//     color: '#333333',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginTop: 10,
//     borderRadius: 5,
//   },
//   addNoteButton: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     padding: 15,
//     backgroundColor: '#e0bbf3',
//     borderRadius: 50,
//     elevation: 5,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: '#333',
//     fontWeight: 'bold',
//   },
// });

// export default NotesScreen;
