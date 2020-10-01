import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
	apiKey: 'AIzaSyA447qCH0LyxWqiNOtTuMM3INQr-Na3Kj0',
	authDomain: 'pomodoro-cards-288418.firebaseapp.com',
	databaseURL: 'https://pomodoro-cards-288418.firebaseio.com',
	projectId: 'pomodoro-cards-288418',
	storageBucket: 'pomodoro-cards-288418.appspot.com',
	messagingSenderId: '1078565876117',
	appId: '1:1078565876117:web:9e47a2c4f1da99577fc69c',
	measurementId: 'G-JSCHLSY6VX',
};

firebase.initializeApp(config);

export default firebase;
