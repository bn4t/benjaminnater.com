import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCrkh9M4tyPeoSCPZRiZHplrHwXbMdFMJw',
  authDomain: 'benj-dev.firebaseapp.com',
  databaseURL: 'https://benj-dev.firebaseio.com',
  projectId: 'benj-dev',
  storageBucket: 'benj-dev.appspot.com',
  messagingSenderId: '185816781427',
  appId: '1:185816781427:web:2957bc2e527abd322b5006',
  measurementId: 'G-533Q5DF9B8'
}
firebase.initializeApp(firebaseConfig)

// Get a Firestore instance
export const db = firebase.firestore()
