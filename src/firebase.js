import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC--xavBew_gxtqCawLxOxD9X80oddZsq4",
  authDomain: "sanketh-clone.firebaseapp.com",
  projectId: "sanketh-clone",
  storageBucket: "sanketh-clone.appspot.com",
  messagingSenderId: "973771659932",
  appId: "1:973771659932:web:13b1541408e029ce48ab59",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
