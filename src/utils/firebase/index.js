// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import {
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
//create a method for signOut
const signOutUser = () => signOut(commerceAuth);

//create a method of onAuthStateChange
const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(commerceAuth, callback);

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
//create method for add collection and Documents from local to firebase
const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field = "title"
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};
//create method for getting data from firestore
const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);

  const categoryMap = querySnapShot.docs.reduce((acc, docsSnapShot) => {
    const { title, items } = docsSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signUpAuthWithEmailAndPassword,
  signInAuthWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
};

/*async function createUser(email, password) {
  await signUpAuthWithEmailAndPassword("kishore@gmail.com", "12345678");
}
createUser();*/
