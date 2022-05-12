// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv6Jt-dLmAN4-kgA_Njc2lvyEHrxSw9NI",
  authDomain: "doctors-portal-f2943.firebaseapp.com",
  projectId: "doctors-portal-f2943",
  storageBucket: "doctors-portal-f2943.appspot.com",
  messagingSenderId: "254747553818",
  appId: "1:254747553818:web:f7b969a27cc905651261a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
