import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../configs/firebaseConfig'; 
import Note from '../../components/Note';

const NotesScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (!currentUser) {
        console.error('No user is authenticated');
        setLoading(false);
        return;
      }

      try {
        const notesRef = collection(db, 'users', currentUser.uid, 'notes');
        const querySnap = await getDocs(notesRef);

        const disp = querySnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNotes(disp);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notes: ', error);
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading notes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {notes.length === 0 ? (
        <Text style={styles.initial}>
          No notes available. Add a new note! You can save your memories here and revisit them!
        </Text>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
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
