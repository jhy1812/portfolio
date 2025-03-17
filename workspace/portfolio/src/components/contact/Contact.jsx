import React, { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  db 
} from './firebase';  // Adjust the path as needed
import { createComment, updateComment, deleteComment } from './firebase';
import './Contact.scss';

const CommentItem = ({ commentData, onDelete, onUpdate }) => {
  const { id, nickname, comment, createdAt, password } = commentData;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment);

  const handleEditClick = () => {
    const enteredPassword = prompt("Enter your password to edit this comment:");
    if (enteredPassword === null) return;
    if (enteredPassword !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }
    setIsEditing(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await onUpdate(id, { comment: editText });
      alert("Comment updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating comment:", error);
      alert("Update failed.");
    }
  };

  const handleDeleteClick = async () => {
    const enteredPassword = prompt("Enter your password to delete this comment:");
    if (enteredPassword === null) return;
    if (enteredPassword !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }
    try {
      await onDelete(id);
      alert("Comment deleted successfully!");
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Deletion failed.");
    }
  };

  return (
    <div className="comment-item">
      <div className="comment-header">
        <span className="comment-nickname">{nickname}</span>
        <span className="comment-time">
          {createdAt ? new Date(createdAt.seconds * 1000).toLocaleString() : ''}
        </span>
      </div>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div className="edit-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <p className="comment-text">{comment}</p>
      )}
      <div className="comment-actions">
        <button className="edit-button" onClick={handleEditClick}>Edit</button>
        <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

const Contact = () => {
  const contactLinks = {
    phone: "+1 234 567 890",
    email: "youremail@example.com",
    github: "https://github.com/yourusername",
    blog: "https://yourblog.com",
  };

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [commentText, setCommentText] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setComments(data);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    try {
      await createComment({
        nickname,
        password,  // In production, hash the password
        comment: commentText,
      });
      setNickname('');
      setPassword('');
      setCommentText('');
      setFormStatus('Thank you for your message!');
    } catch (error) {
      console.error("Error submitting comment:", error);
      setFormStatus('Submission failed. Please try again.');
    }
  };

  const handleUpdateComment = async (id, data) => {
    try {
      await updateComment(id, data);
    } catch (error) {
      console.error("Error updating comment:", error);
      alert("Update failed.");
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await deleteComment(id);
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Deletion failed.");
    }
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactLinks.phone)
      .then(() => alert("Phone number copied to clipboard!"))
      .catch(err => console.error("Failed to copy:", err));
  };

  return (
    <div className="contact-section">
    <h3>Contact Me</h3>
    <div className="contact-me">
      
      <div className="upper-section">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <span className="contact-item">Phone: {contactLinks.phone}</span>
              <button className="copy-button" onClick={handleCopyPhone} title="Copy phone number">
                📋
              </button>
            </li>
            <li>
              <span className="contact-item">Email: </span>
              <a href={`mailto:${contactLinks.email}`} className="contact-link">{contactLinks.email}</a>
            </li>
            <li>
              <span className="contact-item">GitHub: </span>
              <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="contact-link">{contactLinks.github}</a>
            </li>
            <li>
              <span className="contact-item">Blog: </span>
              <a href={contactLinks.blog} target="_blank" rel="noopener noreferrer" className="contact-link">{contactLinks.blog}</a>
            </li>
          </ul>
        </div>
        <div className="comment-form">
          <h2>Leave a Comment</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Nickname" 
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <textarea 
              placeholder="Your comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              required
            />
            <button type="submit">Submit Comment</button>
          </form>
          {formStatus && <p className="status">{formStatus}</p>}
        </div>
      </div>
      <div className="lower-section">
        <h2>Comments</h2>
        <div className="comment-list">
          {comments.map(c => (
            <CommentItem 
              key={c.id} 
              commentData={c} 
              onDelete={handleDeleteComment}
              onUpdate={handleUpdateComment}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
