import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { getAuth, updatePassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
const SettingsScreen = () => {
  const navigation = useNavigation();
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
    navigation.navigate("Policies");
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
          <TouchableOpacity
            style={styles.editIconContainer}
            onPress={() => setIsEditingUsername(true)}
          >
            <Image
              style={styles.editIcon}
              source={require("../../assets/edit-icon.png")}
            />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        {isEditingUsername && (
          <TouchableOpacity
            style={styles.updateButton}
            onPress={handleUsernameChange}
          >
            <Text style={styles.updateButtonText}>Update Username</Text>
          </TouchableOpacity>
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
        <TouchableOpacity
          style={styles.updateButton}
          onPress={handlePasswordChange}
        >
          <Text style={styles.updateButtonText}>Update Password</Text>
        </TouchableOpacity>
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
    backgroundColor: "#EEEEEE",
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
    alignItems: "flex-start",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  editIconContainer: {
    alignItems: "center",
    marginLeft: 10,
  },
  editIcon: {
    width: 20,
    height: 20,
    tintColor: "#FC6C85",
  },
  editText: {
    fontSize: 12,
    color: "#007bff",
    marginTop: 2,
    color: "#FC6C85",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor: "#FC6C85",
  },
  updateButton: {
    marginTop: 10,
    backgroundColor: "#FC6C85",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  updateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  privacyButton: {
    marginTop: 40,
    alignItems: "center",
  },
  privacyText: {
    fontSize: 16,
    color: "black",
  },
});

export default SettingsScreen;
