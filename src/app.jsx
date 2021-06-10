import React from 'react';
import './app.module.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

function App() {
  const provider = new firebaseui.auth.GoogleAuthProvider();

  firebase
    .auth()
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
  return <></>;
}

export default App;
