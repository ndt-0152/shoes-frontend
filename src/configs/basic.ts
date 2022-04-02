import firebase from 'firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { firebaseConfig } from '.';

export const app = firebase.initializeApp(firebaseConfig);

export const firebaseDB = app.firestore();
