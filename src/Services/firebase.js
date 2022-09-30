import React from "react";
import * as firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyCKil3LpciKTofBg0N3ZulP3Br79pCIOKc",
  
    authDomain: "chapappmin.firebaseapp.com",
  
    projectId: "chapappmin",
  
    storageBucket: "chapappmin.appspot.com",
  
    messagingSenderId: "1984473184",
  
    appId: "1:1984473184:web:0561f970e6d564d5a3bb05"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;