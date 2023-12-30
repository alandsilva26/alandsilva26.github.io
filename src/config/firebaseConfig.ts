import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "portfolio-9dbc4.firebaseapp.com",
  databaseURL: "https://portfolio-9dbc4.firebaseio.com",
  projectId: "portfolio-9dbc4",
  storageBucket: "portfolio-9dbc4.appspot.com",
  messagingSenderId: "841600272388",
  appId: "1:841600272388:web:12314d1260dded0601cd51",
  measurementId: "G-55E4QT6C4F",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.database();
export default firebase;
