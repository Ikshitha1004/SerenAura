import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { getAuth } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../configs/firebaseConfig'; // Adjust the path if necessary

const Middle = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUserName(userData.userName || user.displayName || "Unknown");
            setUserEmail(userData.email || user.email || "No email");
            setUserAvatar(userData.avatar || null);
            console.log(userData.avatar);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        console.log('No user is signed in.');
      }
    };

    fetchUserData();
  }, []);
console.log(userAvatar);
  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        
        {userAvatar ? (
          <Image source={{ uri: userAvatar }} style={styles.image} />
        ) : (
           <Image source={require("../../assets/avatars/p3.png")} style={styles.image} />
        )}
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 5,
  },
  userName: {
    fontSize: 16,
    color: "#fc6c85",
    fontWeight: "bold",
    marginTop: 10,
  },
  userEmail: {
    fontSize: 14,
    color: "#000000",
    marginTop: 5,
  },
});

export default Middle;
