import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// Assume you have a function to fetch journal entries
import { fetchJournalEntries } from './yourApi'; 

const JournalListScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getEntries = async () => {
      const fetchedEntries = await fetchJournalEntries(); // Replace with your fetch function
      setEntries(fetchedEntries);
    };

    getEntries();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.entryContainer}
      onPress={() => navigation.navigate('JournalDetail', { entryId: item.id })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date.toDateString()}</Text>
      <Text style={styles.preview}>{item.text.substring(0, 100)}...</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No journal entries found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  entryContainer: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  preview: {
    fontSize: 16,
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default JournalListScreen;
