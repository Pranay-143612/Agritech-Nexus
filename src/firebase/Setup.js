
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnbpvgaGkPfZ1KuAiH1T_TLuAsHD70Vi8",
  authDomain: "agritech-nexus.firebaseapp.com",
  projectId: "agritech-nexus",
  storageBucket: "agritech-nexus.appspot.com",
  messagingSenderId: "930380479640",
  appId: "1:930380479640:web:f7f16dab01c5f390fca4ed",
  measurementId: "G-N16VBCZYQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(app);
export const dbref = ref(db);
export const storage = getFirestore(app)