import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Card from '../../components/Card'; // Assuming the Card component is in the same directory

const Bottom = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <Card icon="home" description="Home" />
        <Card icon="user" description="User" />
      </View>
      <View style={styles.row}>
        <Card icon="bell" description="Notifications" />
        <Card icon="cog" description="Settings" />
      </View>
      <View style={styles.row}>
        <Card icon="home" description="Home" />
        <Card icon="user" description="User" />
      </View>
      <View style={styles.row}>
        <Card icon="bell" description="Notifications" />
        <Card icon="cog" description="Settings" />
      </View>
      <View style={styles.row}>
        <Card icon="bell" description="Notifications" />
        <Card icon="cog" description="Settings" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'lavender',
  },
});

export default Bottom;
