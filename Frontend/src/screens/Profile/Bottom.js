import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Card from '../../components/Card';

const Bottom = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <Card icon={require('../../assets/Profileicons/Flower.png')} description="Progress" size={60} />
        <Card icon={require('../../assets/Profileicons/Flower.png')} description="Sleep" size={60} />
        <Card icon={require('../../assets/Profileicons/Flower.png')} description="Self-assess" size={60} />
        <Card icon={require('../../assets/Profileicons/Flower.png')} description="Reward" size={60} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
});

export default Bottom;
