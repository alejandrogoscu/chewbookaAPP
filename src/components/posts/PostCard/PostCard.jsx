import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LikeFilled, MessageFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { fetchCommentsByPost } from '../../../features/comments/commentsSlice';
import Comments from '../../comments/Comments';
import './postCard.css';

const { Meta } = Card;

const PostCard = ({ _id, title, content, images, avatar, author, comments: postComments }) => {
  const showImage = images && images.length > 0 && images[0] !== '';
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);

  // Si el post ya trae los comentarios, usa su longitud; si no, usa los del slice
  const comments = useSelector(state =>
    state.comments.items.filter(c => c.post === _id)
  );
  const commentCount = Array.isArray(postComments) ? postComments.length : comments.length;

  const handleShowComments = () => {
    setShowComments((prev) => !prev);
    if (!showComments && comments.length === 0) {
      dispatch(fetchCommentsByPost(_id));
    }
  };

  return (
    <>
      <Card
        className="postCard__container"
        actions={[
          <span key="comment" onClick={handleShowComments} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
            <MessageFilled className="postCard__icon" style={{ fontSize: '24px', color: '#00a1e0' }} />
            {commentCount > 0 && (
              <span style={{ marginLeft: '6px', fontWeight: 'bold', color: '#00a1e0' }}>{commentCount}</span>
            )}
          </span>,
          <LikeFilled className="postCard__icon" style={{ fontSize: '24px' }} key="liked" />,
        ]}
      >
        <Meta
          className="postCard__meta"
          avatar={<Avatar src={avatar || author?.image || 'https://api.dicebear.com/7.x/miniavs/svg?seed=8'} />}
          title={<span className="postCard__title">{title}</span>}
          description={<span className="postCard__content">{content}</span>}
        />
        {showImage && (
          <img alt={title} src={images[0]} style={{ width: '100%', marginTop: '1rem', borderRadius: '0.5rem' }} />
        )}
      </Card>
      {/* Los comentarios van aquí, debajo de los iconos */}
      {showComments && (
        <div>
          <Comments comments={comments} />
        </div>
      )}
    </>
  );
};

export default PostCard;
