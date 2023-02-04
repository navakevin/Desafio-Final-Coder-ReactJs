


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB8tnZs2st_7vDtn4vFa_WN4Agx8C5sng",
  authDomain: "npx-ozeer3d.firebaseapp.com",
  projectId: "npx-ozeer3d",
  storageBucket: "npx-ozeer3d.appspot.com",
  messagingSenderId: "20982647327",
  appId: "1:20982647327:web:83d41abc7aba57d709e32a",
  measurementId: "G-S4BQZT6GNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
export const db = getFirestore(app);

