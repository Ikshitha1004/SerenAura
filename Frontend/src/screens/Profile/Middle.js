import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
// Uncomment and use if fetching user data from Firebase
// import { auth, db } from "../../configs/firebaseConfig";
// import { getDoc, doc } from "firebase/firestore";

const Middle = () => {
  const [userName, setUserName] = useState("");
  const [appliedCount, setAppliedCount] = useState(28); // Example static value
  const [reviewedCount, setReviewedCount] = useState(73); // Example static value
  const [contactedCount, setContactedCount] = useState(18); // Example static value

  //Uncomment and use if fetching user data from Firebase
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const user = auth.currentUser;
  //     if (user) {
  //       const userDoc = await getDoc(doc(db, "users", user.uid));
  //       if (userDoc.exists()) {
  //         const userData = userDoc.data();
  //         setUserName(userData.fullName);
  //       }
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/icon.png")} style={styles.image} />
        <Text style={styles.userName}>ikki</Text> 
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
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
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  middleSectionTextContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  middleSectionText: {
    alignItems: "center",
    justifyContent: "center",
  },
  topText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  bottomText: {
    fontSize: 16,
    color: "gray",
  },
});

export default Middle;
