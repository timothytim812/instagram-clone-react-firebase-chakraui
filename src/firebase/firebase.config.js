import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBf3aWDnKyiG2VW5XumNpZ41HxOkSeH3po",
  authDomain: "instagram-clone-6f994.firebaseapp.com",
  projectId: "instagram-clone-6f994",
  storageBucket: "instagram-clone-6f994.appspot.com",
  messagingSenderId: "617409014823",
  appId: "1:617409014823:web:a3acb1ec1801ec8bb8b202",
  measurementId: "G-7K0NRM207P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app);

export { app, auth, firestore, storage };