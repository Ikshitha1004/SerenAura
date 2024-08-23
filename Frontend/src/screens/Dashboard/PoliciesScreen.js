import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const policies = [
  "1: We are not responsible for any consequences or outcomes resulting from the use of our app. Users should use the app at their own risk.",
  "2: We prioritize your privacy and will not share your personal data with third parties without your consent, except as required by law.",
  "3: Users are expected to engage respectfully within the community. Harassment, abuse, or inappropriate behavior will not be tolerated and may result in account suspension.",
  "4: We reserve the right to modify or discontinue the app at any time without prior notice. We are not liable for any changes or discontinuation.",
  "5: The app is not a substitute for emergency services. In case of a mental health crisis, please contact emergency services or a mental health professional immediately.",
  "6: We reserve the right to terminate or suspend user accounts at our discretion, especially in cases of policy violations or inappropriate behavior.",
  "7: Any feedback, suggestions, or ideas provided by users become our property and may be used for any purpose, without compensation or acknowledgment.",
  "8: Users are responsible for maintaining the confidentiality of their account information and for any activity that occurs under their account.",
  "9: We retain user data only for as long as necessary to provide our services. Users have the right to request deletion of their data at any time, and we will comply with such requests in accordance with applicable laws.",
  "10: By using the app, you agree to our terms and conditions, including our privacy policy and disclaimers. Continued use of the app signifies your acceptance of any changes to these policies.",
];

const PoliciesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Policies</Text>
      {policies.map((policy, index) => (
        <View key={index} style={styles.policyContainer}>
          <Text style={styles.policyTitle}>Policy {index + 1}</Text>
          <Text style={styles.policyDescription}>{policy}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#EEEEEE",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  policyContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#FFC0CB", 
    borderRadius: 10,
    elevation: 3, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  policyTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  policyDescription: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default PoliciesScreen;
