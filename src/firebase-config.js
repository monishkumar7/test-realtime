import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAwMz13JTM9p-LmPbN5idQesz5BIaE4-Hg",
  authDomain: "test-realtime-cloudstore.firebaseapp.com",
  projectId: "test-realtime-cloudstore"
});

let db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

// db.collection("users")
//   .add({
//     first: "jane",
//     last: "last",
//     born: 1992
//   })
//   .then(docRef => console.log(docRef.id))
//   .catch(err => console.log(err));

db.collection("users")
  .doc("new")
  .onSnapshot(
    col => console.log("Data now - ", col.data()),
    err => console.log(err)
  );
