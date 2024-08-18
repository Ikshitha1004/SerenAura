import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { fetchJournalEntries } from "../../configs/journalAPI"; // Ensure correct import path

const JournalEntriesScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);

  // Function to fetch journal entries
  const getEntries = useCallback(async () => {
    try {
      const fetchedEntries = await fetchJournalEntries();
      if (Array.isArray(fetchedEntries)) {
        setEntries(fetchedEntries);
      } else {
        console.warn("Fetched entries are not in the expected format.");
      }
    } catch (error) {
      console.error("Error fetching journal entries:", error);
    }
  }, []);

  // Fetch entries when the screen is focused
  useFocusEffect(
    useCallback(() => {
      getEntries();
    }, [getEntries])
  );

  const renderItem = ({ item }) => (
    <View style={styles.entryContainer}>
      <Text style={styles.title}>{item.title || "Untitled"}</Text>
      <Text style={styles.date}>
        {item.date ? new Date(item.date).toDateString() : "No date"}
      </Text>
      <Text style={styles.preview}>
        {item.text
          ? item.text.substring(0, 100) + "..."
          : "No preview available"}
      </Text>
      {item.mood && <Text style={styles.mood}>{item.mood}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Ensure key is a string
        ListEmptyComponent={
          <Text style={styles.emptyText}>No journal entries found</Text>
        }
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Add Entry"
          onPress={() => navigation.navigate("JournalEntry")}
          color="#007bff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5" },
  entryContainer: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  date: { fontSize: 14, color: "#888", marginBottom: 4 },
  preview: { fontSize: 16, color: "#333" },
  mood: { fontSize: 20, color: "#f39c12" },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default JournalEntriesScreen;
