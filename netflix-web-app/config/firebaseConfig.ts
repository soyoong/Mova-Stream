// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQO8YgxCdEVW9rFyFTMTPnywnJDoGwFe4",
  authDomain: "mova-stream.firebaseapp.com",
  projectId: "mova-stream",
  storageBucket: "mova-stream.appspot.com",
  messagingSenderId: "461195211384",
  appId: "1:461195211384:web:7f2f757fc7dc04b79bb38d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }