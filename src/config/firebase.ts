
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { config } from './config';
import firebase from 'firebase/compat/app';

const Firebase = initializeApp(config.firebaseConfig);


export const Providers  = {
    google: new firebase.auth.GoogleAuthProvider(),

}
export const auth = firebase.auth()
export default Firebase
