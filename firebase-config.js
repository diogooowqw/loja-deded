// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTr24X4XFjomYeO-0z_wZl-tQVBsY2fh4",
  authDomain: "mercearia-de-tia-elza.firebaseapp.com",
  projectId: "mercearia-de-tia-elza",
  storageBucket: "mercearia-de-tia-elza.appspot.com",
  messagingSenderId: "573764124231",
  appId: "1:573764124231:web:166468afc5ba033776bb62",
  measurementId: "G-VN9RSEWEEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);