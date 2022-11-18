import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG134qpAT74jOnIqM5UM98mJYV2AtrasM",
  authDomain: "bookingapp-6bacc.firebaseapp.com",
  databaseURL: "https://bookingapp-6bacc-default-rtdb.firebaseio.com",
  projectId: "bookingapp-6bacc",
  storageBucket: "bookingapp-6bacc.appspot.com",
  messagingSenderId: "748040864438",
  appId: "1:748040864438:web:68f474432ea840b9bb9c17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);