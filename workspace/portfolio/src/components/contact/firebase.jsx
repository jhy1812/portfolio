// firebase.js
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export Firestore utilities if needed
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

/**
 * Create a new comment in the 'comments' collection.
 * @param {object} data - The comment data, e.g. { nickname, password, comment }
 * @returns {Promise<string>} - The ID of the created comment.
 */
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

/**
 * Read a comment by its ID from the 'comments' collection.
 * @param {string} commentId - The ID of the comment.
 * @returns {Promise<object|null>} - The comment data or null if not found.
 */
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

/**
 * Update a comment in the 'comments' collection.
 * @param {string} commentId - The ID of the comment.
 * @param {object} data - The new data to update.
 */
export async function updateComment(commentId, data) {
  try {
    const commentRef = doc(db, "comments", commentId);
    await updateDoc(commentRef, data);
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
}

/**
 * Delete a comment from the 'comments' collection.
 * @param {string} commentId - The ID of the comment.
 */
export async function deleteComment(commentId) {
  try {
    const commentRef = doc(db, "comments", commentId);
    await deleteDoc(commentRef);
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error;
  }
}
