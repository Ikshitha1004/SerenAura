import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../configs/firebaseConfig'; 

const getRandomColor = () => {
  const l = '0123456789ABCDEF';
  let col = '#';
  for (let i = 0; i < 6; i++) {
    col += l[Math.floor(Math.random() * 16)];
  }
  return col;
};

const GratJar = ({ navigation, route }) => {
  const [fillPercent, setFillPercent] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);
  const [notes, setNotes] = useState([]);
  const [jarColor, setJarColor] = useState('#ffb6c1'); 

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchFillPercent = async () => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid, 'jar', 'data');
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setFillPercent(data.fillPercent || 0);
          }
        } catch (error) {
          console.error('Error fetching fillPercent: ', error);
        }
      }
    };

    fetchFillPercent();
  }, [user]);

  useEffect(() => {
    if (route.params?.newNote) {
      const newNotes = [...notes, route.params.newNote];
      setNotes(newNotes);
      handleAddNote();
    }
  }, [route.params?.newNote]);

  // Calculating the fill height based on the percentage
  const totalH = 230 - 23; // Total height of the jar minus the cap area
  const currFillH = totalH * (fillPercent / 100);

  
  const handleAddNote = async () => {
    if (fillPercent < 100) {
      const updatedFillPercent = fillPercent + 5;
      setFillPercent(updatedFillPercent);
      setJarColor(getRandomColor());

      if (updatedFillPercent >= 100) {
        setShowCongrats(true);
        setTimeout(resetJar, 2000);
      }

      // Saving percentage to Firestore
      if (user) {
        try {
          await setDoc(
            doc(db, 'users', user.uid, 'jar', 'data'),
            { fillPercent: updatedFillPercent },
            { merge: true }
          );
        } catch (error) {
          console.error('Error saving fill percent: ', error);
        }
      }
    }
  };

  const resetJar = async () => {
    setShowCongrats(false);
    setFillPercent(0);
    setJarColor('#ffb6c1');

    // Resetting the fillPercent in Firestore
    if (user) {
      try {
        await setDoc(
          doc(db, 'users', user.uid, 'jar', 'data'),
          { fillPercent: 0 },
          { merge: true }
        );
      } catch (error) {
        console.error('Error resetting fillPercent: ', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Svg height="250" width="150" viewBox="0 0 150 250">
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

    
      {showCongrats && <Text style={styles.congratsText}>Congrats! The jar is full! Here is a new jar for you!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Change later
  },
  openJarButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FC6C85',
    borderRadius: 10,
  },
  button: {
    fontSize: 18,
    color: '#000000',
  },
  congratsText: {
    marginTop: 20,
    fontSize: 18,
    color: '#000000',
  },
});

export default GratJar;
