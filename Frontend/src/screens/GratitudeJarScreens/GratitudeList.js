import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const GratitudeList = ({ notes }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={[styles.note, { backgroundColor: item.color }]}>
          <Text style={styles.noteText}>{item.content}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  note: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  noteText: {
    color: '#FFF',
  },
});

export default GratitudeList;
