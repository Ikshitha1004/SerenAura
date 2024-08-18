// src/api/yourApi.js
import { db } from "./firebaseConfig"; // Adjust the import path to your firebase configuration
import { collection, getDocs } from "firebase/firestore";

// Define the fetchJournalEntries function
export const fetchJournalEntries = async () => {
  try {
    const journalEntries = [];
    const querySnapshot = await getDocs(collection(db, "journalEntries"));
    querySnapshot.forEach((doc) => {
      journalEntries.push({ id: doc.id, ...doc.data() });
    });
    return journalEntries;
  } catch (error) {
    console.error("Error fetching journal entries: ", error);
    return [];
  }
};
