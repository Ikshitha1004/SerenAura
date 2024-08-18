import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet ,Text} from 'react-native';

const avatars = [
  require('../../assets/avatars/p1.png'),
  require('../../assets/avatars/p3.png'),
  require('../../assets/avatars/p4.png'),
  require('../../assets/avatars/p5.png'),
  require('../../assets/avatars/p6.png'),
  require('../../assets/avatars/p7.png'),
  require('../../assets/avatars/p8.png'),
  // Add more avatars as needed
];
const AvatarSelection = ({ onAvatarSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your avatar</Text>
      <View style={styles.row}>
        {avatars.slice(0, 4).map((avatar, index) => (
          <TouchableOpacity key={index} onPress={() => onAvatarSelect(avatar)}>
            <Image source={avatar} style={styles.avatar} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {avatars.slice(4).map((avatar, index) => (
          <TouchableOpacity key={index} onPress={() => onAvatarSelect(avatar)}>
            <Image source={avatar} style={styles.avatar} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ccc',
  },
});

export default AvatarSelection;

