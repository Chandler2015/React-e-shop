import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBRp0BU1Cw-jmtVf6iP_3iPJrCrP3KcfsU",
  authDomain: "e-shop-ca2b4.firebaseapp.com",
  databaseURL: "https://e-shop-ca2b4.firebaseio.com",
  projectId: "e-shop-ca2b4",
  storageBucket: "e-shop-ca2b4.appspot.com",
  messagingSenderId: "232520432248",
  appId: "1:232520432248:web:c9a322eaf94a3feaf1cb8d"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;