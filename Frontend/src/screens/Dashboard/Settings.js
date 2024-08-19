import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { getAuth, updatePassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const SettingsScreen = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [username, setUsername] = useState(user?.displayName || "");
  const [password, setPassword] = useState("");
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleUsernameChange = async () => {
    if (user) {
      try {
        // Update displayName in Firebase Authentication
        await updateProfile(user, { displayName: username });

        // Update displayName in Firestore
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);

        await updateDoc(userDocRef, { displayName: username });

        Alert.alert("Success", "Username updated successfully!");
        setIsEditingUsername(false);
      } catch (error) {
        Alert.alert("Error", error.message);
      }
    }
  };

  const handlePasswordChange = () => {
    if (user) {
      updatePassword(user, password)
        .then(() => {
          Alert.alert("Success", "Password updated successfully!");
          setPassword("");
        })
        .catch((error) => {
          Alert.alert("Error", error.message);
        });
    }
  };

  const handlePrivacyPolicy = () => {
    // Navigate to Privacy Policy screen or show a modal with the privacy policy
    // navigation.navigate("PrivacyPolicyScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Username</Text>
        <View style={styles.usernameInputContainer}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            editable={isEditingUsername}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setIsEditingUsername(true)}>
            <Image
              style={styles.editIcon}
              source={require("../../assets/edit-icon.png")}
            />
          </TouchableOpacity>
        </View>
        {isEditingUsername && (
          <Button title="Update Username" onPress={handleUsernameChange} />
        )}
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter new password"
            secureTextEntry={secureTextEntry}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          >
            <Image
              style={styles.icon}
              source={require("../../assets/hide.png")}
            />
          </TouchableOpacity>
        </View>
        <Button title="Update Password" onPress={handlePasswordChange} />
      </View>

      <TouchableOpacity
        style={styles.privacyButton}
        onPress={handlePrivacyPolicy}
      >
        <Text style={styles.privacyText}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  fieldContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  usernameInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  editIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor: "#007bff",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor: "#007bff",
  },
  privacyButton: {
    marginTop: 40,
    alignItems: "center",
  },
  privacyText: {
    fontSize: 16,
    color: "#007bff",
  },
});

export default SettingsScreen;
