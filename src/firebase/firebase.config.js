// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDom4PO2-DDCt01NMfuAUfUnosJ_SPlUO8",
  authDomain: "matrimony-client.firebaseapp.com",
  projectId: "matrimony-client",
  storageBucket: "matrimony-client.appspot.com",
  messagingSenderId: "722237286518",
  appId: "1:722237286518:web:f3661246efa4d089815757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;