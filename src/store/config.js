import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBlVn0LceZFpRiHBB0US8ukygImC4qN010",
  authDomain: "olx-clone-one.firebaseapp.com",
  projectId: "olx-clone-one",
  storageBucket: "olx-clone-one.appspot.com",
  messagingSenderId: "1092602504708",
  appId: "1:1092602504708:web:84942262803a3d4fd8f751",
  measurementId: "G-G0L3K4Y3B4"
};

  const Firebase =firebase.initializeApp(firebaseConfig);
  export default Firebase;


