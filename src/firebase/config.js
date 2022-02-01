import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDOkoYNDY1Q_7pQ6vgCXJa6EXluyoRl00",
  authDomain: "fightlife-3373d.firebaseapp.com",
  projectId: "fightlife-3373d",
  storageBucket: "fightlife-3373d.appspot.com",
  messagingSenderId: "1040222729659",
  appId: "1:1040222729659:web:7b4e89d53129d1c4c3009e",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
