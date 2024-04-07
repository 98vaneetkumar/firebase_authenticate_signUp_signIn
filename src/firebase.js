import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJz3kjkefY9PRfUx_qk7Mc9mq8V_SBZxU",
  authDomain: "react-firebase-96a31.firebaseapp.com",
  projectId: "react-firebase-96a31",
  storageBucket: "react-firebase-96a31.appspot.com",
  messagingSenderId: "867674919124",
  appId: "1:867674919124:web:7cd5edba2c59618698eb41",
  databaseURL:"https://react-firebase-96a31-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);