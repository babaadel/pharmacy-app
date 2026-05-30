import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSB5L2EMXF2vIbqFRQGbTg_2nkSCylg6g",
  authDomain: "pharmacy-app-75e3a.firebaseapp.com",
  projectId: "pharmacy-app-75e3a",
  storageBucket: "pharmacy-app-75e3a.firebasestorage.app",
  messagingSenderId: "598637495217",
  appId: "1:598637495217:web:daf7d8e393437efd6ff390",
  measurementId: "G-19F3ZXKGSC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
  console.log('Offline persistence:', err.code);
});
