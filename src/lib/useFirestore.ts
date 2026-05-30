import { db } from './firebase';
import { doc, setDoc, onSnapshot, getDoc } from 'firebase/firestore';

const STORE_ID = 'pharmacy-main';

export async function saveToFirestore(key: string, value: any) {
  try {
    await setDoc(doc(db, 'pharmacy', STORE_ID), { [key]: JSON.stringify(value) }, { merge: true });
  } catch (e) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export async function loadFromFirestore(key: string, fallback: any) {
  try {
    const snap = await getDoc(doc(db, 'pharmacy', STORE_ID));
    if (snap.exists() && snap.data()[key]) {
      return JSON.parse(snap.data()[key]);
    }
  } catch (e) {}
  const local = localStorage.getItem(key);
  return local ? JSON.parse(local) : fallback;
}

export function subscribeToFirestore(callback: (data: any) => void) {
  return onSnapshot(doc(db, 'pharmacy', STORE_ID), (snap) => {
    if (snap.exists()) callback(snap.data());
  });
}
