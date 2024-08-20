import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

// Static imports for images
import PeaceImage from "../../assets/Music/peaceful-category.png";
import DeepSleepImage from "../../assets/Music/deep-sleep-category.png";
import MeditationImage from "../../assets/Music/meditation-category.png";
import NatureImage from "../../assets/Music/nature-category.png";
import CalmBreezeImage from "../../assets/Music/calmBreeze.png";
import PeacefulGarden from "../../assets/Music/peaceful-garden.png";
import SilentWaters from "../../assets/Music/silent-waters.png";
import MoonlitWalk from "../../assets/Music/moonlit-walk.png";
import StarsAbove from "../../assets/Music/stars-above.png";
import RestfulSlumber from "../../assets/Music/restful-slumber.png";
import MindfulMoments from "../../assets/Music/mindful-moments.png";
import InnerPeace from "../../assets/Music/inner-peace.png";
import TranquilPath from "../../assets/Music/tranquil-path.png";
import OceanWaves from "../../assets/Music/ocean-waves.png";
import BirdSong from "../../assets/Music/bird-song.png";
import MountainBreeze from "../../assets/Music/mountain-breeze.png";

const songs = {
  peace: [
    {
      title: "Peaceful Garden",
      file: "peaceful-garden.mp3",
      image: PeacefulGarden,
    },
    { title: "Calm Breeze", file: "calm-breeze.mp3", image: CalmBreezeImage },
    { title: "Silent Waters", file: "silent-waters.mp3", image: SilentWaters },
    { title: "Serenity", file: "serenity.mp3", image: PeaceImage },
  ],
  deep_sleep: [
    { title: "Dreamy Night", file: "dreamy-night.mp3", image: DeepSleepImage },
    { title: "Moonlit Walk", file: "moonlit-walk.mp3", image: MoonlitWalk },
    { title: "Stars Above", file: "stars-above.mp3", image: StarsAbove },
    {
      title: "Restful Slumber",
      file: "restful-slumber.mp3",
      image: RestfulSlumber,
    },
  ],
  meditation: [
    { title: "Zen Focus", file: "zen-focus.mp3", image: MeditationImage },
    {
      title: "Mindful Moments",
      file: "mindful-moments.mp3",
      image: MindfulMoments,
    },
    { title: "Inner Peace", file: "inner-peace.mp3", image: InnerPeace },
    {
      title: "Tranquil Path",
      file: "tranquil-path.mp3",
      image: TranquilPath,
    },
  ],
  nature: [
    {
      title: "Forest Ambience",
      file: "forest-ambience.mp3",
      image: NatureImage,
    },
    { title: "Ocean Waves", file: "ocean-waves.mp3", image: OceanWaves },
    { title: "Birdsong", file: "birdsong.mp3", image: BirdSong },
    {
      title: "Mountain Breeze",
      file: "mountain-breeze.mp3",
      image: MountainBreeze,
    },
  ],
};

const SongListScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const categorySongs = songs[category.id] || [];

  return (
    <View style={styles.container}>
      {categorySongs.map((song, index) => (
        <TouchableOpacity
          key={index}
          style={styles.songButton}
          onPress={() =>
            navigation.navigate("Player", { song: song, category: category })
          }
        >
          <View style={styles.imageContainer}>
            <Image source={song.image} style={styles.image} />
          </View>
          <Text style={styles.songText}>{song.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "EEEEEE", 
  },
  songButton: {
    alignItems: "center",
    margin: "7%",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  songText: {
    color: "#000000", 
    fontSize: 23,
  },
});

export default SongListScreen;
