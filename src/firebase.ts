import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARAilG_4d5k-Rg866EGPCtqzCpPM3aHMM",
  authDomain: "discord-clone-udemy-4cd1c.firebaseapp.com",
  projectId: "discord-clone-udemy-4cd1c",
  storageBucket: "discord-clone-udemy-4cd1c.appspot.com",
  messagingSenderId: "138673350180",
  appId: "1:138673350180:web:2206b2211b6c2eb6409ab1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
