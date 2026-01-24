import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyD7Gt72ivfw4PTeJsxi7M9i9o3fSR57Tak",
  authDomain: "crwn-db-7acc9.firebaseapp.com",
  databaseURL: "https://crwn-db-7acc9.firebaseio.com",
  projectId: "crwn-db-7acc9",
  storageBucket: "crwn-db-7acc9.appspot.com",
  messagingSenderId: "1037154664224",
  appId: "1:1037154664224:web:4d408e54499c6274abe145",
  measurementId: "G-8DJBZ9WQ08"
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName: displayName,
        email: email,
        createdAt: createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(firestore, collectionKey);

  const batch = writeBatch(firestore);
  objectToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshopToMap = collections => {
  const transformCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
//being used in user.saga now
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
