import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { fetchJournalEntries } from "../../configs/journalAPI"; // Ensure correct import path

const JournalEntriesScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Track authentication state

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
      if (error.message.includes("User is not authenticated")) {
        setIsAuthenticated(false); // Handle unauthenticated state
      }
    }
  }, []);

  // Fetch entries when the screen is focused
  useFocusEffect(
    useCallback(() => {
      getEntries();
    }, [getEntries])
  );

  if (!isAuthenticated) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>
          Please log in to view your journal entries.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Login"
            onPress={() => navigation.navigate("Login")}
            color="#007bff"
          />
        </View>
      </View>
    );
  }

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
          color="#000000"
          
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#eeeeee" },
  entryContainer: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: "#FFC0CB",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: { fontSize: 20, fontWeight: "bold" ,  },
  date: { fontSize: 14, color: "#4B4B4B", marginBottom: 4 },
  preview: { fontSize: 16, color: "#333" },
  mood: { fontSize: 20, color: "#fff" },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
    fontSize: 16
    
  },
});

export default JournalEntriesScreen;
