import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  serverTimestamp,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {
  db,
  serverTimestamp,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
};


export async function createComment(data) {
  try {
    const commentRef = await addDoc(collection(db, "comments"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return commentRef.id;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
}

export async function readComment(commentId) {
  try {
    const commentRef = doc(db, "comments", commentId);
    const commentSnap = await getDoc(commentRef);
    return commentSnap.exists() ? commentSnap.data() : null;
  } catch (error) {
    console.error("Error reading comment:", error);
    throw error;
  }
}

export async function updateComment(commentId, data) {
  try {
    const commentRef = doc(db, "comments", commentId);
    await updateDoc(commentRef, data);
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
}

export async function deleteComment(commentId) {
  try {
    const commentRef = doc(db, "comments", commentId);
    await deleteDoc(commentRef);
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error;
  }
}
