// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApcckSCtIEtXKPNwpC_uTiqTCyqdCRs4U",
  authDomain: "ema-john-with-firebase-a-99646.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-99646",
  storageBucket: "ema-john-with-firebase-a-99646.appspot.com",
  messagingSenderId: "737308743157",
  appId: "1:737308743157:web:47c8e86e4cf8bd1133fcbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app