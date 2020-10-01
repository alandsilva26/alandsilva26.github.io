import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap";
import "./sass/main.scss";

// import "./utils";

// import * as firebase from "firebase/app";
// import "firebase/analytics";
// import "firebase/database";

// var firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: "portfolio-9dbc4.firebaseapp.com",
//   databaseURL: "https://portfolio-9dbc4.firebaseio.com",
//   projectId: "portfolio-9dbc4",
//   storageBucket: "portfolio-9dbc4.appspot.com",
//   messagingSenderId: "841600272388",
//   appId: "1:841600272388:web:12314d1260dded0601cd51",
//   measurementId: "G-55E4QT6C4F",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// export const db = firebase.firestore();

ReactDOM.render(<App />, document.getElementById("root"));
