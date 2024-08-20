import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useFocusEffect } from "@react-navigation/native";

// Ensure audio files are correctly imported
import PeacefulGarden from "../../assets/Music/peaceful-garden.mp3";
import CalmBreeze from "../../assets/Music/calm-breeze.mp3";
import SilentWaters from "../../assets/Music/silent-waters.mp3";
import Serenity from "../../assets/Music/serenity.mp3";
import DreamyNight from "../../assets/Music/dreamy-night.mp3";
import MoonlitWalk from "../../assets/Music/moonlit-walk.mp3";
import StarsAbove from "../../assets/Music/stars-above.mp3";
import RestfulSlumber from "../../assets/Music/restful-slumber.mp3";
import ZenFocus from "../../assets/Music/zen-focus.mp3";
import MindfulMoments from "../../assets/Music/mindful-moments.mp3";
import InnerPeace from "../../assets/Music/inner-peace.mp3";
import TranquilPath from "../../assets/Music/tranquil-path.mp3";
import ForestAmbience from "../../assets/Music/forest-ambience.mp3";
import OceanWaves from "../../assets/Music/ocean-waves.mp3";
import Birdsong from "../../assets/Music/birdsong.mp3";
import MountainBreeze from "../../assets/Music/mountain-breeze.mp3";

const audioFiles = {
  "peaceful-garden.mp3": PeacefulGarden,
  "calm-breeze.mp3": CalmBreeze,
  "silent-waters.mp3": SilentWaters,
  "serenity.mp3": Serenity,
  "dreamy-night.mp3": DreamyNight,
  "moonlit-walk.mp3": MoonlitWalk,
  "stars-above.mp3": StarsAbove,
  "restful-slumber.mp3": RestfulSlumber,
  "zen-focus.mp3": ZenFocus,
  "mindful-moments.mp3": MindfulMoments,
  "inner-peace.mp3": InnerPeace,
  "tranquil-path.mp3": TranquilPath,
  "forest-ambience.mp3": ForestAmbience,
  "ocean-waves.mp3": OceanWaves,
  "birdsong.mp3": Birdsong,
  "mountain-breeze.mp3": MountainBreeze,
};

const PlayerScreen = ({ route }) => {
  const { song, category } = route.params;
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(audioFiles[song.file]);
        setSound(sound);
      } catch (error) {
        Alert.alert("Error", "Failed to load sound.");
        console.error(error);
      }
    };

    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [song.file]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (sound && isPlaying) {
          sound.stopAsync();
          setIsPlaying(false);
        }
      };
    }, [sound, isPlaying])
  );

  const handlePlayPause = async () => {
    if (sound) {
      try {
        if (isPlaying) {
          await sound.pauseAsync();
        } else {
          await sound.playAsync();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        Alert.alert("Error", "Failed to play/pause sound.");
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Song Image */}
      <View style={styles.songImageContainer}>
        <Image source={song.image} style={styles.songImage} />
      </View>

      <Text style={styles.songTitle}>{song.title}</Text>

      {/* Play/Pause Button */}
      <TouchableOpacity style={styles.button} onPress={handlePlayPause}>
        <Icon
          name={isPlaying ? "pause" : "play-arrow"}
          size={50}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  songImageContainer: {
    width: "80%", // Make the container slightly smaller than the screen width
    height: "50%", // Cover half of the screen height
    backgroundColor: "#f0f0f0", // Background color for the container
    borderRadius: 20, // Rounded corners for the container
    borderWidth: 0, // Border width for the container
    borderColor: "#dcdcdc", // Border color
    overflow: "hidden", // Ensure the image stays within the container's bounds
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  songImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Make the image cover the entire container
  },
  songTitle: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#F0595B",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "80%",
    height: "10%",
  },
});

export default PlayerScreen;
