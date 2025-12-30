// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcxFt0auN_-yijxxHUcm5l5EYmcLB4m60",
    authDomain: "riyamakeover-in.firebaseapp.com",
    projectId: "riyamakeover-in",
    storageBucket: "riyamakeover-in.firebasestorage.app",
    messagingSenderId: "554478842130",
    appId: "1:554478842130:web:ecb443279dd67bea01c3cb",
    measurementId: "G-BXK93QQ88R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };