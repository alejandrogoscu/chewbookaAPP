import React from 'react';

const Comment = ({ comment }) => (
  <div>
    <strong>{comment.author?.username || 'Anónimo'}:</strong> {comment.comment}
    <div>
      {new Date(comment.createdAt).toLocaleString()}
    </div>
  </div>
);

export default Comment; 