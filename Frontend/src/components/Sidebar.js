import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
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
    <View style={[styles.container, { backgroundColor: "#D598E5" }]}>
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
          onPress={() => {navigation.navigate("Settings")}}
          style={styles.drawerItem}
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
          style={styles.drawerItem}
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
          style={styles.drawerItem}
        />
        <DrawerItem
          label="Rate Us"
          icon={({ size }) => (
            <Ionicons name="star-sharp" size={size} color="#000000" />
          )}
          labelStyle={styles.labelStyle}
          onPress={() => props.navigation.navigate("RatingScreen")}
          style={styles.drawerItem}
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
          style={styles.drawerItem}
        />
        <DrawerItem
          label="Sign Out"
          icon={({ size }) => (
            <Ionicons name="log-out-sharp" size={size} color="#000000" />
          )}
          labelStyle={styles.labelStyle}
          onPress={handleSignOut}
          style={styles.drawerItem}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
  },
  content: {
    flex: 1,
    paddingTop: 100, // Adjust this for a larger sidebar
   
  },
  labelStyle: {
    color: "#333333",
    fontSize: 18, // Increased font size for larger sidebar
  },
  drawerItem: {
    marginBottom: 20, // Space between each DrawerItem
  },
});

export default Sidebar;
