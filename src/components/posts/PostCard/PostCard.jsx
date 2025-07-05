import React from 'react';
import Comment from '../Comment/Comment';

const PostCard = ({ post, comments }) => {
  if (!post) return null;
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {post.images && post.images.length > 0 && (
        <div>
          {post.images.map((img, idx) => (
            <img key={idx} src={img} alt="post"  />
          ))}
        </div>
      )}
      <div>
        <strong>Comentarios:</strong>
        {post.comments && post.comments.length > 0 ? (
          post.comments.map((comment, idx) => (
            <Comment key={comment._id || idx} comment={comment} />
          ))
        ) : (
          <div>No hay comentarios.</div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
