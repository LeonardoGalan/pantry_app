// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeU2f_4JZRvdZhSx4fDDTMZgwpgAixZQ0",
  authDomain: "inventory-management-169e6.firebaseapp.com",
  projectId: "inventory-management-169e6",
  storageBucket: "inventory-management-169e6.appspot.com",
  messagingSenderId: "304880011172",
  appId: "1:304880011172:web:db5fa4c6a5209148f56331",
  measurementId: "G-2REMNZZBDK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}