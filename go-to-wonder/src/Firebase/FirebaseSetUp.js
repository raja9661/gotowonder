import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDvp5_FfGdw0RVR_hOz9tgVlogmDgE7XT8",
  authDomain: "gotowonder-43aec.firebaseapp.com",
  projectId: "gotowonder-43aec",
  storageBucket: "gotowonder-43aec.appspot.com",
  messagingSenderId: "242529329267",
  appId: "1:242529329267:web:3e69d6e42a45c5997f0a06"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);