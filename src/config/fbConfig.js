import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyAwMz13JTM9p-LmPbN5idQesz5BIaE4-Hg",
  authDomain: "test-realtime-cloudstore.firebaseapp.com",
  databaseURL: "https://test-realtime-cloudstore.firebaseio.com",
  projectId: "test-realtime-cloudstore",
  storageBucket: "test-realtime-cloudstore.appspot.com",
  messagingSenderId: "355468548901"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
