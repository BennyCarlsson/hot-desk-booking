import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseAuth } from "../../../services/Firebase";
import firebase from "firebase/app";


interface RegisterComponent {
  onSuccess(firebaseUser: firebase.User): void
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen(props: RegisterComponent) {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebaseAuth.onAuthStateChanged((user: firebase.User | null) => {
      setIsSignedIn(!!user);
      if (user) {
        props.onSuccess(user)
      }
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [props]);

  if (!isSignedIn) {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
      </div>
    );
  }
  return (
    <div>
      <h1>Välkommen!</h1>
      <p>{firebaseAuth.currentUser?.displayName}! You are now signed-in!</p>
      <button onClick={() => firebaseAuth.signOut()}>Sign-out</button>
    </div>
  );
}


export default SignInScreen;