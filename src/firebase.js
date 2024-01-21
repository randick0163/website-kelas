// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* utama */
  apiKey: "AIzaSyAo1lIne-NAt0kbovecG1tbUvfoo-cO3YM",
  authDomain: "web-kelas-ips-1.firebaseapp.com",
  projectId: "web-kelas-ips-1",
  storageBucket: "web-kelas-ips-1.appspot.com",
  messagingSenderId: "559312198292",
  appId: "1:559312198292:web:55faf74890b5a88b3ef281",
  measurementId: "G-3ZHNHWF0VY"
/* sec */
/* apiKey: "AIzaSyCiId2YJAxd3PIXqAXNjx6hfZYycpQlzl0",
  authDomain: "web-kelas-1.firebaseapp.com",
  projectId: "web-kelas-1",
  storageBucket: "web-kelas-1.appspot.com",
  messagingSenderId: "797263276694",
  appId: "1:797263276694:web:7bc8be9e05f2f87adfb0b7" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();