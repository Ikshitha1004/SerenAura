import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import { auth, db } from "../../configs/firebaseConfig";
// import { getDoc, doc } from "firebase/firestore";

const Middle = () => {
  const [userName, setUserName] = useState("");
  const [appliedCount, setAppliedCount] = useState(28);
  const [reviewedCount, setReviewedCount] = useState(73);
  const [contactedCount, setContactedCount] = useState(18);

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
        <Image source={require("../../assets/user.png")} style={styles.image} />
        <Text style={styles.userName}>{userName || "User Name"}</Text>
      </View>

      <View style={styles.middleSectionTextContainer}>
        <View style={styles.middleSectionText}>
          <Text style={styles.topText}>Applied</Text>
          <Text style={styles.bottomText}>{appliedCount}</Text>
        </View>

        <View style={styles.middleSectionText}>
          <Text style={styles.topText}>Reviewed</Text>
          <Text style={styles.bottomText}>{reviewedCount}</Text>
        </View>

        <View style={styles.middleSectionText}>
          <Text style={styles.topText}>Contacted</Text>
          <Text style={styles.bottomText}>{contactedCount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
    backgroundColor: "white", // Ensure a visible background color
    padding: 20, // Add padding to avoid edges
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20, // Add spacing
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 16,
    color: "black", // Changed to black for better visibility
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
