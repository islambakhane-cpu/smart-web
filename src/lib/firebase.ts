import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF4QjxUH0hrc3hyvEatpwtEsfwXZ39HlI",
  authDomain: "biocare-8623d.firebaseapp.com",
  projectId: "biocare-8623d",
  storageBucket: "biocare-8623d.firebasestorage.app",
  messagingSenderId: "42076519098",
  appId: "1:42076519098:web:09a08a86a0569f219a6083"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
