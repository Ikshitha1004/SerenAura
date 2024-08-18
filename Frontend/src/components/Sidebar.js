import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { signOut } from "firebase/auth"; // Import Firebase signOut function
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const Sidebar = (props) => {
  const navigation = useNavigation(); // Initialize the navigation hook
  const auth = getAuth(); // Get the Firebase Auth instance

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigation.navigate("HomeScreen"); // Navigate to the HomeScreen
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFC0CB", "#8A2BE2"]} // Pastel pink to violet
        style={styles.gradient}
      >
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={styles.content}
        >
          <DrawerItem
            label="Settings"
            icon={({ size }) => (
              <Ionicons name="settings-sharp" size={size} color="#000000" />
            )}
            labelStyle={styles.labelStyle}
            onPress={() => {}}
          />
          <DrawerItem
            label="About Us"
            icon={({ size }) => (
              <Ionicons
                name="information-circle-sharp"
                size={size}
                color="#000000"
              />
            )}
            labelStyle={styles.labelStyle}
            onPress={() => props.navigation.navigate("AboutUsScreen")}
          />
          <DrawerItem
            label="Feedback"
            icon={({ size }) => (
              <Ionicons
                name="chatbox-ellipses-sharp"
                size={size}
                color="#000000"
              />
            )}
            labelStyle={styles.labelStyle}
            onPress={() => props.navigation.navigate("FeedbackScreen")}
          />
          <DrawerItem
            label="Rate Us"
            icon={({ size }) => (
              <Ionicons name="star-sharp" size={size} color="#000000" />
            )}
            labelStyle={styles.labelStyle}
            onPress={() => props.navigation.navigate("RatingScreen")}
          />
          <DrawerItem
            label="Policies"
            icon={({ size }) => (
              <Ionicons
                name="document-text-sharp"
                size={size}
                color="#000000"
              />
            )}
            labelStyle={styles.labelStyle}
            onPress={() => props.navigation.navigate("PoliciesScreen")}
          />
          <DrawerItem
            label="Sign Out"
            icon={({ size }) => (
              <Ionicons name="log-out-sharp" size={size} color="#000000" />
            )}
            labelStyle={styles.labelStyle}
            onPress={handleSignOut} // Use the handleSignOut function
          />
        </DrawerContentScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 190,
  },
  labelStyle: {
    color: "#333333",
    fontSize: 16,
  },
});

export default Sidebar;
