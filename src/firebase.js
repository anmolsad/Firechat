import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW-wLxEKoAI1QAiyj98H8kt_9533S-JTk",
  authDomain: "chat-2b55c.firebaseapp.com",
  projectId: "chat-2b55c",
  storageBucket: "chat-2b55c.appspot.com",
  messagingSenderId: "746343721599",
  appId: "1:746343721599:web:fdfdbf393e67829e2a6d4a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
