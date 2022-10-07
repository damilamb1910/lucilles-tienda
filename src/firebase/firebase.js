// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMQf7pmWY04ng5ZXn5i3N_o-SR0X2SQrU",
  authDomain: "lucilleslook-bcda6.firebaseapp.com",
  projectId: "lucilleslook-bcda6",
  storageBucket: "lucilleslook-bcda6.appspot.com",
  messagingSenderId: "2253430183",
  appId: "1:2253430183:web:08f63e6ff94a7757ffea82",
  measurementId: "G-1JR8SMWB39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)