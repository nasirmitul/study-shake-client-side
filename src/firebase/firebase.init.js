// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTJYAk6YxQeeGO052Qz4r2IjuUFcApSMA",
  authDomain: "study-shake.firebaseapp.com",
  projectId: "study-shake",
  storageBucket: "study-shake.appspot.com",
  messagingSenderId: "704143895874",
  appId: "1:704143895874:web:32bb7c16f5f5e5d28b2cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;