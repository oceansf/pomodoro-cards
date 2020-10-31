import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const app = firebase.initializeApp({
  apiKey: "AIzaSyBmZ2B1r9pfDz2zzaThkwjMdV-QmWHkFDY",
  authDomain: "pomodoro-cards-ccaf6.firebaseapp.com",
  databaseURL: "https://pomodoro-cards-ccaf6.firebaseio.com",
  projectId: "pomodoro-cards-ccaf6",
  storageBucket: "pomodoro-cards-ccaf6.appspot.com",
  messagingSenderId: "242925216627",
  appId: "1:242925216627:web:4f074fd23133d286509b06"
});

export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // // This gives you a Google Access Token. You can use it to access the Google API.
  // const token = result.credential.accessToken;
  // // The signed-in user info.
  // const user = result.user;
  // // ...
}).catch(function(error) {
  console.error(error);
});
}

export default app;