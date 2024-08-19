import { db, auth } from "./firebaseConfig"; // Ensure auth is imported
import { collection, getDocs, query, where } from "firebase/firestore";

// Define the fetchJournalEntries function
export const fetchJournalEntries = async () => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User is not authenticated");
    }

    const journalEntries = [];
    const q = query(
      collection(db, "journalEntries"),
      where("userId", "==", user.uid) // Filter by authenticated user ID
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      journalEntries.push({ id: doc.id, ...doc.data() });
    });
    return journalEntries;
  } catch (error) {
    console.error("Error fetching journal entries: ", error);
    return [];
  }
};
