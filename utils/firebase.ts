import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAMb8HxYkMos5EJDiI7sQybyIftIhRB-zg",
    authDomain: "alphanet-9d6ad.firebaseapp.com",
    projectId: "alphanet-9d6ad",
    storageBucket: "alphanet-9d6ad.firebasestorage.app",
    messagingSenderId: "604902367447",
    appId: "1:604902367447:web:75517f1fb2e506be139092",
    measurementId: "G-TDYXQEWDT9"
};

const app = initializeApp(firebaseConfig);


export const firebaseFireStore = getFirestore(app);
export const firebaseAuth = getAuth(app);
