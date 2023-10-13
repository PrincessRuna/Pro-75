import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBnZRhVPqgySJmQDfg78WZVb4SmwpB-a8Y",
  authDomain: "e-ride-89efb.firebaseapp.com",
  projectId: "e-ride-89efb",
  storageBucket: "e-ride-89efb.appspot.com",
  messagingSenderId: "764019007149",
  appId: "1:764019007149:web:7c80f93759bec96945b024"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
