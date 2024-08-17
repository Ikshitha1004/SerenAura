import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 

const HomeScreen = ({ navigation }) => {
  const categories = [
    { name: "Peace Music", id: "peace" },
    { name: "Deep Sleep Music", id: "deep_sleep" },
    { name: "Meditation Music", id: "meditation" },
    { name: "Nature Sounds", id: "nature" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>“Where words fail, music speaks.”</Text>
      </View>
      <Text style={styles.title}>Choose a category</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryButton}
            onPress={() => navigation.navigate("Songs", { category: category })}
          >
            <FontAwesome name="music" size={40} color="#fff" />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", 
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  quoteContainer: {
    backgroundColor: "#f0e68c", 
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    maxWidth: "90%",
  },
  quote: {
    color: "#333",
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 30,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  categoryButton: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
});

export default HomeScreen;
