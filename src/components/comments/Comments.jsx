import React from 'react';
import Comment from './Comment';

const Comments = ({ comments }) => (
  <div>
    {comments.length > 0
      ? comments.map(comment => <Comment key={comment._id} comment={comment} />)
      : <div>No hay comentarios.</div>
    }
  </div>
);

export default Comments; 