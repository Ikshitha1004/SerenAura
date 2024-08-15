import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

// Static imports for images
import PeaceImage from "../../assets/peaceful-category.png";
import DeepSleepImage from "../../assets/deep-sleep-category.png";
import MeditationImage from "../../assets/meditation-category.png";
import NatureImage from "../../assets/nature-category.png";

const songs = {
  peace: [
    {
      title: "Peaceful Garden",
      file: "peaceful-garden.mp3",
      image: PeaceImage,
    },
    { title: "Calm Breeze", file: "calm-breeze.mp3", image: PeaceImage },
    { title: "Silent Waters", file: "silent-waters.mp3", image: PeaceImage },
    { title: "Serenity", file: "serenity.mp3", image: PeaceImage },
  ],
  deep_sleep: [
    { title: "Dreamy Night", file: "dreamy-night.mp3", image: DeepSleepImage },
    { title: "Moonlit Walk", file: "moonlit-walk.mp3", image: DeepSleepImage },
    { title: "Stars Above", file: "stars-above.mp3", image: DeepSleepImage },
    {
      title: "Restful Slumber",
      file: "restful-slumber.mp3",
      image: DeepSleepImage,
    },
  ],
  meditation: [
    { title: "Zen Focus", file: "zen-focus.mp3", image: MeditationImage },
    {
      title: "Mindful Moments",
      file: "mindful-moments.mp3",
      image: MeditationImage,
    },
    { title: "Inner Peace", file: "inner-peace.mp3", image: MeditationImage },
    {
      title: "Tranquil Path",
      file: "tranquil-path.mp3",
      image: MeditationImage,
    },
  ],
  nature: [
    {
      title: "Forest Ambience",
      file: "forest-ambience.mp3",
      image: NatureImage,
    },
    { title: "Ocean Waves", file: "ocean-waves.mp3", image: NatureImage },
    { title: "Birdsong", file: "birdsong.mp3", image: NatureImage },
    {
      title: "Mountain Breeze",
      file: "mountain-breeze.mp3",
      image: NatureImage,
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
    backgroundColor: "black",
  },
  songButton: {
    alignItems: "center",
    margin: 10,
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
    color: "#fff",
    fontSize: 18,
  },
});

export default SongListScreen;
