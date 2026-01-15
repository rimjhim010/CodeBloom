// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALZUk0EJNzqhz_cXmVbxuRD9U0YeDmgCw",
  authDomain: "bloom-branding-2cac1.firebaseapp.com",
  projectId: "bloom-branding-2cac1",
  storageBucket: "bloom-branding-2cac1.appspot.com", // ✅ FIXED
  messagingSenderId: "41627698657",
  appId: "1:41627698657:web:56aa5ee2e8e12843987ea0",
};

const app = initializeApp(firebaseConfig);

// ✅ EXPORT CORRECT INSTANCES
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
