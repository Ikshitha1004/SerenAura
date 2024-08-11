import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Dummy data for blog posts and events
const posts = [
  { id: '1', title: 'First Blog Post', type: 'Blog' },
  { id: '2', title: 'Second Blog Post', type: 'Blog' },
  { id: '3', title: 'Upcoming Event', type: 'Event' },
  { id: '4', title: 'Another Event', type: 'Event' },
];

const CommunityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SerenAura</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.postItem}
            onPress={() => {
              // Navigate to details screen or another page as needed
              // Example: navigation.navigate('PostDetails', { postId: item.id });
            }}
          >
            <Text style={styles.postTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Create Blog"
          onPress={() => navigation.navigate('Blog')}
        />
        <Button
          title="Host Event"
          onPress={() => navigation.navigate('Event')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  postItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postTitle: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default CommunityScreen;
