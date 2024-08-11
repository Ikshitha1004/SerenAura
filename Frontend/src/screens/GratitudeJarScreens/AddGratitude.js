import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddGratitude = ({ navigation, route }) => {
  const [note, setNote] = useState('');
  const [mood, setMood] = useState('');

  const handleAdd = () => {
    // Add the new note with a default color (you can add logic to choose a color based on mood or type)
    route.params.addNote({
      type: 'text',
      content: note,
      mood: mood,
      color: '#87CEEB', // Light blue for this example
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write your gratitude note here..."
        value={note}
        onChangeText={setNote}
        style={styles.input}
      />
      <TextInput
        placeholder="How do you feel? (Optional)"
        value={mood}
        onChangeText={setMood}
        style={styles.input}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FADADD',
  },
  input: {
    borderColor: '#DDD',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#FFF',
  },
});

export default AddGratitude;
