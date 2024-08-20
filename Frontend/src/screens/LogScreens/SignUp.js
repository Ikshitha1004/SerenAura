import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import { useRouter } from "expo-router";
import { auth, db } from "../../configs/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

SplashScreen.preventAutoHideAsync();

const SignUp = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  // const db = getFirestore(); // Initialize Firestore

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const OncreateAccount = () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.BOTTOM);
      return;
    }
  
    if (password.length < 6) {
      ToastAndroid.show("Password must be at least 6 characters long", ToastAndroid.BOTTOM);
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
  
        // Update the displayName (username) immediately after account creation
        await updateProfile(user, {
          displayName: fullName,
        });
  
        // Store the user's name in Firestore
        await setDoc(doc(db, "users", user.uid), {
          displayName: fullName,
          email: user.email,
          uid: user.uid,
        });
  
        console.log("User registered and profile updated.");
        navigation.navigate("AvatarSelection");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        if (errorCode === 'auth/email-already-in-use') {
          ToastAndroid.show("This email is already registered. Please try logging in.", ToastAndroid.BOTTOM);
        } else if (errorCode === 'auth/invalid-email') {
          ToastAndroid.show("Please enter a valid email address.", ToastAndroid.BOTTOM);
        } else if (errorCode === 'auth/weak-password') {
          ToastAndroid.show("Password is too weak. Please choose a stronger password.", ToastAndroid.BOTTOM);
        } else {
          ToastAndroid.show(errorMessage, ToastAndroid.BOTTOM);
        }
        console.log(errorCode, errorMessage);
      });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.signUpNow}>Sign Up Now</Text>

      <View style={styles.inputContainer}>
        <Image
          style={{ height: 15, width: 15, marginRight: 10 }}
          contentFit="cover"
          source={require("../../assets/user-2.png")}
        />
        <TextInput
          style={styles.inputLabel}
          placeholder="Username"
          placeholderTextColor="#999999"
          onChangeText={(value) => setFullName(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../assets/email.png")}
        />
        <TextInput
          style={styles.inputLabel}
          placeholder="Email"
          placeholderTextColor="#999999"
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../assets/key-3.png")}
        />
        <TextInput
          style={styles.inputLabel}
          placeholder="Password"
          placeholderTextColor="#999999"
          secureTextEntry={secureTextEntry}
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          style={{ justifyContent: "center" }}
        >
          <Image
            style={styles.hideIcon}
            contentFit="cover"
            source={require("../../assets/hide.png")}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={OncreateAccount}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3E0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  signUpNow: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 32,
    width: "100%",
    padding: 15,
    marginBottom: 20,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  inputLabel: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#696969",
    flex: 1,
  },
  hideIcon: {
    height: 20,
    width: 20,
  },
  signUpButton: {
    backgroundColor: "#FF6951",
    borderRadius: 32,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginTop: 30,
  },
  signUpButtonText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
});

export default SignUp;