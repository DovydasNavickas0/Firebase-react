import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3YdcDCXX5AlEXkxBvFPMElSpKi92ckXw",
  authDomain: "react-project-66928.firebaseapp.com",
  projectId: "react-project-66928",
  storageBucket: "react-project-66928.appspot.com",
  messagingSenderId: "27670058502",
  appId: "1:27670058502:web:49d07032dcc852d2ca1587"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db