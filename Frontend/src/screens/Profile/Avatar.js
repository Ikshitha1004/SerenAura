import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import { getAuth } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../configs/firebaseConfig"; // Update path as needed
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const avatars = [
  require("../../assets/avatars/p1.png"),
  require("../../assets/avatars/p3.png"),
  require("../../assets/avatars/p4.png"),
  require("../../assets/avatars/p5.png"),
  require("../../assets/avatars/p6.png"),
  require("../../assets/avatars/p7.png"),
  require("../../assets/avatars/p8.png"),
  // Add more avatars as needed
];

const AvatarSelection = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
    const fetchUserAvatar = async () => {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (!currentUser) {
        Alert.alert("Error", "User is not authenticated");
        return;
      }

      try {
        const userDocRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          if (userData.avatar) {
            setSelectedAvatar(userData.avatar);
          }
        }
      } catch (error) {
        Alert.alert("Error", "Failed to fetch user avatar");
        console.error("Error fetching user avatar: ", error);
      }
    };

    fetchUserAvatar();
  }, []);

  const handleAvatarSelect = async (avatar) => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      Alert.alert("Error", "User is not authenticated");
      return;
    }

    try {
      const avatarUri = avatar; // Use the avatar URI or identifier

      // Save the selected avatar to Firebase
      const userDocRef = doc(db, "users", currentUser.uid);
      await setDoc(userDocRef, { avatar: avatarUri }, { merge: true });

      setSelectedAvatar(avatarUri);
      Alert.alert("Success", "Avatar saved successfully", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Welcome"), // Navigate to Welcome screen
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "Failed to save avatar", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Welcome"), // Navigate even if there's an error
        },
      ]);
      console.error("Error saving avatar: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your avatar</Text>
      <View style={styles.row}>
        {avatars.slice(0, 4).map((avatar, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleAvatarSelect(avatar)}
          >
            <Image
              source={avatar}
              style={[
                styles.avatar,
                selectedAvatar === avatar && styles.selectedAvatar,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {avatars.slice(4).map((avatar, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleAvatarSelect(avatar)}
          >
            <Image
              source={avatar}
              style={[
                styles.avatar,
                selectedAvatar === avatar && styles.selectedAvatar,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  selectedAvatar: {
    borderColor: "#FF69B4",
    borderWidth: 3,
  },
});

export default AvatarSelection;
