// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRMgzPQliVg9TC0BaKWkLnPp1khq21rYo",
    authDomain: "alaa-eldin-f25c9.firebaseapp.com",
    projectId: "alaa-eldin-f25c9",
    storageBucket: "alaa-eldin-f25c9.firebasestorage.app",
    messagingSenderId: "505768288190",
    appId: "1:505768288190:web:865230050fd6e56be223ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
