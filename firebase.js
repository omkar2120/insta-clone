import firebase from "firebase";
import auth from 'firebase'
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB89QMUST-AVhi-NRj1bQIXP36d6-Uan-M",
  authDomain: "instagramclone-90eba.firebaseapp.com",
  projectId: "instagramclone-90eba",
  storageBucket: "instagramclone-90eba.appspot.com",
  messagingSenderId: "483361726146",
  appId: "1:483361726146:web:7745691f7704bd4cbaa55b",
  measurementId: "G-P5WBMWXZZ3"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

// var db = firebase.firestore();
const db = firebase.firestore()

export { firebase , db ,auth}
