// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIzfRpP0Fw92IZD6u69ILjYeEruPwsPZg",
  authDomain: "e-commerce-reactproject.firebaseapp.com",
  projectId: "e-commerce-reactproject",
  storageBucket: "e-commerce-reactproject.appspot.com",
  messagingSenderId: "495611966417",
  appId: "1:495611966417:web:7c34f33b74770233bae6f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authentication
const auth = getAuth(app);

//login with google
const googleProvider = new GoogleAuthProvider();

const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);

//createuseremailandpassword
const signUpAuthWithEmailAndPassword = async (email, password) => {
  if (!email && !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};
//signinwithemailandpassword
const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email && !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

//firestoredatabase
const db = getFirestore(app);
const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });

      /*const userData = {
        uid: userAuth.uid,
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      };
      localStorage.setItem("userData", JSON.stringify(userData));*/
    } catch (err) {
      console.log("Something went wrong!", err.message);
    }
  }

  return userDocRef;
};

export {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signUpAuthWithEmailAndPassword,
  signInAuthWithEmailAndPassword,
};

/*async function createUser(email, password) {
  await signUpAuthWithEmailAndPassword("kishore@gmail.com", "12345678");
}
createUser();*/
