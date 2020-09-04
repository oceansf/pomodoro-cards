import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDwI6MAoKDJqJ2asOyO6JdjRKU5h-RS3fw",
  authDomain: "pomodoro-cards.firebaseapp.com",
  databaseURL: "https://pomodoro-cards.firebaseio.com",
  projectId: "pomodoro-cards",
  storageBucket: "pomodoro-cards.appspot.com",
  messagingSenderId: "664795739799",
  appId: "1:664795739799:web:68a3578c890053b0f0dbd2",
  measurementId: "G-4ND0MZGVJ7",
};
firebase.initializeApp(config);
export default firebase;
