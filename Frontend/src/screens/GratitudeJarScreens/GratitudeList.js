import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const GratitudeListScreen = ({ navigation }) => {
  // Mock data for the gratitude notes
  const gratitudeNotes = [
    { id: '1', content: 'Had a great day with friends.' },
    { id: '2', content: 'Found a new hobby I enjoy.' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={gratitudeNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteContainer}>
            <Text style={styles.noteText}>{item.content}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddGratitude')}
      >
        <Text style={styles.addButtonText}>+ Add New Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  noteContainer: {
    padding: 15,
    backgroundColor: '#E6E6FA',
    borderRadius: 5,
    marginBottom: 10,
  },
  noteText: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    padding: 15,
    backgroundColor: '#DDA0DD',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default GratitudeListScreen;
