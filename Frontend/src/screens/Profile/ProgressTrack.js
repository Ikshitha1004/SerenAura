import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firestore = getFirestore();
const auth = getAuth();

const Progress = () => {
  const [scores, setScores] = useState([]);
  const [indicesArray, setIndicesArray] = useState([]); // State for indices
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState(""); // State for the message
  const [averageScore, setAverageScore] = useState(null); // State for the average score

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid); // Set user ID for the authenticated user
      } else {
        console.log("User is not logged in");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const userDocRef = doc(firestore, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          const scoresArray = data.scores || []; // Assuming scores is an array of {date, score} objects

          // Prepare data for the chart
          const scoresValues = scoresArray.map((entry) => entry.score);
          const indices = scoresValues.map((_, index) =>
            (index + 1).toString()
          ); // Create indices for x-axis

          setScores(scoresValues);
          setIndicesArray(indices); // Set indices for x-axis

          // Calculate average score
          const totalScore = scoresValues.reduce(
            (acc, score) => acc + score,
            0
          );
          const average = totalScore / scoresValues.length;

          // Determine message based on average score
          let text = "";
          if (average <= 15) {
            text =
              "You're in a good place right now! Keep up the positive habits that are contributing to your well-being.";
          } else if (average <= 25) {
            text =
              "You might be feeling a bit low, but that's okay. Focus on small joys and reach out to a friend.";
          } else if (average <= 40) {
            text =
              "It seems like you’re facing some challenges right now. Remember, it’s okay to seek help and take time for self-care.";
          } else if (average <= 60) {
            text =
              "This is a difficult time, and your feelings are valid. Reaching out for support can make a big difference.";
          } else {
            text =
              "You're experiencing a lot right now. Please consider seeking professional help, and remember you’re not alone.";
          }

          setAverageScore(average);
          setMessage(text);
        }
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <View style={styles.container}>
      {scores.length > 0 ? (
        <>
          <LineChart
            data={{
              labels: indicesArray, // Use indices for the x-axis labels
              datasets: [{ data: scores }],
            }}
            width={Dimensions.get("window").width - 20} // Width of the graph
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: { borderRadius: 16 },
              propsForDots: { r: "6", strokeWidth: "2", stroke: "#ffa726" },
            }}
            bezier
            style={styles.chart}
          />
          <View style={styles.card}>
            <Text style={styles.averageScore}>
              Average Score: {averageScore?.toFixed(2)}
            </Text>
            <Text style={styles.message}>{message}</Text>
          </View>
        </>
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  card: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  averageScore: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Progress;
