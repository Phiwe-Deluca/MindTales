import React, { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <h3>Comments</h3>
      <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Add a comment..." />
      <button onClick={addComment}>Post</button>
      <ul>
        {comments.map((comment, index) => <li key={index}>{comment}</li>)}
      </ul>
    </div>
  );
};

export default Comments;
