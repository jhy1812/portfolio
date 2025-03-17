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

// Your Firebase configuration – replace with your actual values.
const firebaseConfig = {
    apiKey: "AIzaSyABwdNCUvJZXnC7K_U7uyA8MbGMsL-23CM",
    authDomain: "portfolio-b7af2.firebaseapp.com",
    projectId: "portfolio-b7af2",
    storageBucket: "portfolio-b7af2.firebasestorage.app",
    messagingSenderId: "651395638664",
    appId: "1:651395638664:web:1c425175fe1458fe0c863d",
    measurementId: "G-KS8FLH5Z5T"
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
