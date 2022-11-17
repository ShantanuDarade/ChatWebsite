import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqF2C4UVigqh6uXgCeTn0HHl1i3xJCImk",
  authDomain: "chat-5a20a.firebaseapp.com",
  projectId: "chat-5a20a",
  storageBucket: "chat-5a20a.appspot.com",
  messagingSenderId: "249299514265",
  appId: "1:249299514265:web:8b4e853b4f9ffb65d31908"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()