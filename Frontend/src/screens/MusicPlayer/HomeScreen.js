// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { FontAwesome } from "@expo/vector-icons"; // For music icon

// const HomeScreen = ({ navigation }) => {
//   const categories = [
//     { name: "Peace Music", id: "peace" },
//     { name: "Deep Sleep Music", id: "deep_sleep" },
//     { name: "Meditation Music", id: "meditation" },
//     { name: "Nature Sounds", id: "nature" },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.quoteContainer}>
//         <Text style={styles.quote}>“Where words fail, music speaks.”</Text>
//       </View>
//       <Text style={styles.title}>Choose a category</Text>
//       <View style={styles.categoriesContainer}>
//         {categories.map((category) => (
//           <TouchableOpacity
//             key={category.id}
//             style={styles.categoryButton}
//             onPress={() => navigation.navigate("Songs", { category: category })}
//           >
//             <FontAwesome name="music" size={40} color="#fff" />
//             <Text style={styles.categoryText}>{category.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eeeeee",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   quoteContainer: {
//      // Light khaki background color
    
//     marginBottom: "10%",
//     marginTop: "5%", // Adjust this value to move the quote up
//     maxWidth: "90%",
//   },
//   quote: {
//     color: "#FF2C7A",
//     fontSize: 25,
//     fontStyle: "italic",
//     textAlign: "center",
//   },
//   title: {
//     color: "#333",
//     fontSize: 24,
//     marginBottom: "20%",
//   },
//   categoriesContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   },
//   categoryButton: {
//     width: "40%",
//     height: "30%",
//     borderRadius: 50, // Makes the button round
//     backgroundColor: "#FC6C85",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 12,
//     marginTop:"5%",
//   },
//   categoryText: {
//     color: "#fff",
//     fontSize: 14,
//     textAlign: "center",
//     marginTop: 5,
//   },
// });

// export default HomeScreen;
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // For music icon

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
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
  },

  quoteContainer: {
     // Light khaki background color
    
    marginBottom: "10%",
    marginTop: "5%", // Adjust this value to move the quote up
    maxWidth: "90%",
  },
  quote: {
    color: "#FF2C7A",
    fontSize: 25,
    fontStyle: "italic",
    textAlign: "center",
  },
  title: {
    color: "#333",
    fontSize: 24,
    marginBottom: "20%",
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  categoryButton: {
    width: "40%",
    height: "30%",
    borderRadius: 50, // Makes the button round
    backgroundColor: "#FC6C85",
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    marginTop:"5%",
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
});

export default HomeScreen;
