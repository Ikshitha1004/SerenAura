import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Audio } from "expo-av";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useFocusEffect } from "@react-navigation/native"; 

// Static imports for all audio files and category images
import PeacefulGarden from "../../assets/peaceful-garden.mp3";
import CalmBreeze from "../../assets/calm-breeze.mp3";
import SilentWaters from "../../assets/silent-waters.mp3";
import Serenity from "../../assets/serenity.mp3";
import DreamyNight from "../../assets/dreamy-night.mp3";
import MoonlitWalk from "../../assets/moonlit-walk.mp3";
import StarsAbove from "../../assets/stars-above.mp3";
import RestfulSlumber from "../../assets/restful-slumber.mp3";
import ZenFocus from "../../assets/zen-focus.mp3";
import MindfulMoments from "../../assets/mindful-moments.mp3";
import InnerPeace from "../../assets/inner-peace.mp3";
import TranquilPath from "../../assets/tranquil-path.mp3";
import ForestAmbience from "../../assets/forest-ambience.mp3";
import OceanWaves from "../../assets/ocean-waves.mp3";
import Birdsong from "../../assets/birdsong.mp3";
import MountainBreeze from "../../assets/mountain-breeze.mp3";

import PeaceImage from "../../assets/peaceful-category.png";
import DeepSleepImage from "../../assets/deep-sleep-category.png";
import MeditationImage from "../../assets/meditation-category.png";
import NatureImage from "../../assets/nature-category.png";

// Mapping song file names to imported files
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

const categoryImages = {
  peace: PeaceImage,
  deep_sleep: DeepSleepImage,
  meditation: MeditationImage,
  nature: NatureImage,
};

const PlayerScreen = ({ route }) => {
  const { song, category } = route.params;
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(audioFiles[song.file]);
      setSound(sound);
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
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={categoryImages[category.id]}
          style={styles.categoryImage}
        />
      </View>
      <Text style={styles.songTitle}>{song.title}</Text>
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
    backgroundColor: "black",
  },
  imageContainer: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", 
  },
  songTitle: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlayerScreen;
