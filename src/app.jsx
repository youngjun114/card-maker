import React from 'react';
import './app.module.css';
import firebase from 'firebase/app';
import 'firebase/auth';

function App() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: 'business-car-maker.firebaseapp.com',
    databaseURL: 'https://business-car-maker-default-rtdb.firebaseio.com',
    projectId: 'business-car-maker',
    storageBucket: 'business-car-maker.appspot.com',
    messagingSenderId: '423929136510',
    appId: '1:423929136510:web:bc7346909a01a7392edf2f',
    measurementId: 'G-8JJRRNXWEF',
  };

  return (
    <>
      <FirebaseAuthProvider
        firebase={firebase}
        {...firebaseConfig}
      ></FirebaseAuthProvider>
    </>
  );
}

export default App;
