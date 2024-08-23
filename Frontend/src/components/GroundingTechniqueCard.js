import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const BreathingTimer = ({ timer, isActive, setIsActive }) => {
  const [secondsLeft, setSecondsLeft] = useState(timer);

  useEffect(() => {
    let interval;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(timer);
  };

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>
        {`Time Left: ${Math.floor(secondsLeft / 60)}:${(secondsLeft % 60).toString().padStart(2, '0')}`}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, isActive && styles.disabledButton]}
          onPress={() => setIsActive(true)}
          disabled={isActive}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, !isActive && styles.disabledButton]}
          onPress={() => setIsActive(false)}
          disabled={!isActive}
        >
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={resetTimer}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const GroundingTechniqueCard = ({ technique }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.name}>{technique.name}</Text>
        {Array.isArray(technique.description) ? (
          technique.description.map((item, index) => (
            <View key={index} style={styles.descriptionContainer}>
              <Image source={item.image} style={styles.smallImage} />
              <View style={styles.textContainer}>
                <Text style={styles.description}>{item.text}</Text>
                <Text style={styles.explanation} numberOfLines={10}>
                  {item.explanation}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <>
            {technique.image && <Image source={technique.image} style={styles.image} />}
            <Text style={styles.description}>{technique.description}</Text>
          </>
        )}
        {(technique.id === 4 || technique.id === 15) && (
          <BreathingTimer timer={technique.timer} isActive={isActive} setIsActive={setIsActive} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexGrow: 1,
    padding: width * 0.03,
  },
  card: {
    padding: width * 0.05,
    backgroundColor: '#000000',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    marginBottom: height * 0.02, // Add some space below the card
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  smallImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 500,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    fontStyle: 'Aptos',
  },
  description: {
    fontSize: 16,
    color: '#fff',
  },
  explanation: {
    fontSize: 13,
    color: '#fff',
    marginTop: 5,
  },
  timerContainer: {
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 20,
  },
  timerText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  button: {
    backgroundColor: '#fc6c85',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: '#333333',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GroundingTechniqueCard;
 