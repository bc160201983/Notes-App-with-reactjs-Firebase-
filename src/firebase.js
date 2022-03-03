// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoJJlea2WXyIztPYoPuRu0MOkfbOG1h2I",
  authDomain: "masnoondawaa.firebaseapp.com",
  databaseURL: "https://masnoondawaa-default-rtdb.firebaseio.com",
  projectId: "masnoondawaa",
  storageBucket: "masnoondawaa.appspot.com",
  messagingSenderId: "890918911643",
  appId: "1:890918911643:web:f93d58da168a66b19f903e",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);
export const db = getFirestore(app);
