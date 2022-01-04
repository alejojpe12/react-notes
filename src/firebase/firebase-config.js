import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAMNzqLqWmXonTF3Ya34jFzibBScDhrtls",
    authDomain: "react-journal-13781.firebaseapp.com",
    projectId: "react-journal-13781",
    storageBucket: "react-journal-13781.appspot.com",
    messagingSenderId: "857911536643",
    appId: "1:857911536643:web:7f4510d581702132c2f236"
};
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase

}




