import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "timetracker-d1541.firebaseapp.com",
  projectId: "timetracker-d1541",
  storageBucket: "timetracker-d1541.appspot.com",
  messagingSenderId: "967503439334",
  appId: "1:967503439334:web:260f7613612dcdb2a2a227",
  measurementId: "G-43H3RXW3JX",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
