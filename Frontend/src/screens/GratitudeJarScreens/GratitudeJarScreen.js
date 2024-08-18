import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const getRandomColor = () => {
  const l = '0123456789ABCDEF';
  let col = '#';
  for (let i = 0; i < 6; i++) 
  {
    col += l[Math.floor(Math.random() * 16)];
  }
  return col;
};

const GratJar = ({ navigation, route }) => {
  const [fillPercent, setfillPercent] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);
  const [notes, setNotes] = useState([]);
  const [jarColor, setJarColor] = useState('#ffb6c1'); // Default color

  useEffect(() => {
    // Handle new note addition
    if (route.params?.newNote) {
      const newNotes = [...notes, route.params.newNote];
      setNotes(newNotes);
      handleAddNote();
    }
  }, [route.params?.newNote]);

  // Calculate the fill height based on the percentage
  const totalH = 230 - 23; // Total height of the jar minus the cap area
  const currFillH = totalH * (fillPercent / 100);

  // Function to handle adding a new note
  const handleAddNote = () => {
    if (fillPercent < 100) {
      const upd = fillPercent + 5;
      setfillPercent(upd);
      setJarColor(getRandomColor()); // Set a new color for the jar

      if (upd >= 100) {
        setShowCongrats(true);
        setTimeout(resetJar, 2000);
      }
    }
  };

  // Function to reset the jar
  const resetJar = () => {
    setShowCongrats(false);
    setfillPercent(0);
    setJarColor('#ffb6c1');
  };

  return (
    <View style={styles.container}>
      {/* Jar */}
      <Svg height='250' width="150" viewBox="0 0 150 250">
        {/*Cap*/}
        <Rect x="20" y="0" width="110" height="15" fill="#d2691e" rx="7" />
        <Rect x="20" y="15" width="110" height="8" fill="#d2691e" rx="4" />

        {/*Body*/}
        <Path
          d="M 30 23 Q 20 50 20 55 L 20 200 Q 20 230 50 230 L 100 230 Q 130 230 130 200 L 130 55 Q 130 50 120 23 Z"
          stroke="#000"
          strokeWidth="2"
          fill="transparent"
        />

        {/* Jar Filling */}
        {fillPercent > 0 && (
          <Path
            d={`M 30 ${230 - currFillH} Q 20 55 20 55 L 20 200 Q 20 230 50 230 L 100 230 Q 130 230 130 200 L 130 ${230 - currFillH} Z`}
            fill={jarColor}
          />
        )}
      </Svg>

      <TouchableOpacity
        style={styles.openJarButton}
        onPress={() => navigation.navigate('NotesScreen', { notes })}
      >
        <Text style={styles.button}>Open the Jar</Text>
      </TouchableOpacity>

      {/* Congratulatory Message */}
      {showCongrats && <Text style={styles.congratsText}>Congrats! The jar is full! Here is a new jar for you!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',//change later
  },
  openJarButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0bbf3',
    borderRadius: 10,
  },
  button: {
    fontSize: 18,
    color: '#333',
  },
  congratsText: {
    marginTop: 20,
    fontSize: 18,
    color: '#4caf50',
  },
});

export default GratJar;
