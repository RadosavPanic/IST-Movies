import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB61YFroDW3-LbAJ5VWJ2pvrchFuKE96N8",
  authDomain: "ist-movies.firebaseapp.com",
  projectId: "ist-movies",
  storageBucket: "ist-movies.appspot.com",
  messagingSenderId: "1030482614655",
  appId: "1:1030482614655:web:03908000a58d78cd84224a",
};

initializeApp(firebaseConfig);

export const db = getFirestore();

// Adding collection and documents with data to Firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // collectionKey -> name of collection
  const collectionRef = collection(db, collectionKey);

  // Safe Transactions using Batch -> CRUD operations on db
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// Getting categories and documents from collection
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "movies");

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const movieMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();

    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return movieMap;
};
