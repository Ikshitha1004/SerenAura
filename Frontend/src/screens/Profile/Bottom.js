import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';

const Bottom = () => {
  const navigation = useNavigation();

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress("Progress")}>
          <Card 
            icon={require('../../assets/Profileicons/Progress.png')} 
            description="Progress" 
            size={60}  
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("SleepTracker")}>
          <Card 
            icon={require('../../assets/Profileicons/Sleep.png')} 
            description="Sleep" 
            size={60}  
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Welcome")}>
          <Card 
            icon={require('../../assets/Profileicons/Self-assess.png')} 
            description="Self-assess" 
            size={60}  
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("MoodTracker")}>
          <Card 
            icon={require('../../assets/Profileicons/Mood.png')} 
            description="Mood" 
            size={60}  
          />
        </TouchableOpacity>
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
