import React, { useState } from 'react';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentToPost, fetchCommentsByPost } from '../../features/comments/commentsSlice';

const Comments = ({ postId }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  // Selecciona los comentarios de Redux filtrados por postId
  const comments = useSelector(state =>
    state.comments.items.filter(c => c.post === postId)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    await dispatch(addCommentToPost({ postId, comment: text }));
    setText('');
    dispatch(fetchCommentsByPost(postId));
  };

  return (
    <div>
      {comments.length > 0
        ? comments.map(comment => <Comment key={comment._id} comment={comment} />)
        : <div>No hay comentarios.</div>
      }
      <form onSubmit={handleSubmit} style={{ marginTop: '8px', display: 'flex', gap: '4px' }}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Añade un comentario..."
          style={{ flex: 1 }}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Comments; 