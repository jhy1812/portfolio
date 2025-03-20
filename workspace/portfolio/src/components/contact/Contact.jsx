import React, { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  db 
} from './firebase';  
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
        <span className="comment-nickname">작성자 : {nickname}</span>
        <span className="comment-time">
          {createdAt ? new Date(createdAt.seconds * 1000).toLocaleString() : ''}
        </span>
      </div>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            maxLength="300"
          />
          <div className="edit-actions">
            <button type="submit" className="save-button">Save</button>
            <button type="button" className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
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
    phone: "+82-10-9244-1258",
    email: "jhy1812@naver.com",
    github: "https://github.com/jhy1812",
    blog: "https://jhy-day.tistory.com/",
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
        password,  
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
      <h1>Contact Me</h1>
      <div className="contact-me">
        <div className="upper-section">
          <div className="contact-info">
            <h2>Contact Info.</h2>
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
            <h2>메모</h2>
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
                placeholder="Password(수정, 삭제 할 때 필요합니다.)" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <textarea 
                placeholder="Your comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
                maxLength="300"
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
