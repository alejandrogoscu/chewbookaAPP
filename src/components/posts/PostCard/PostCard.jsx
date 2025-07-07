import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LikeFilled, MessageFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { fetchCommentsByPost } from '../../../features/comments/commentsSlice';
import Comments from '../../comments/Comments';
import './postCard.css';

const { Meta } = Card;

const PostCard = ({ _id, title, content, images, avatar, author }) => {
  const showImage = images && images.length > 0 && images[0] !== '';
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);

  // Selecciona solo los comentarios de este post
  const comments = useSelector(state =>
    state.comments.items.filter(c => c.post === _id)
  );

  const handleShowComments = () => {
    setShowComments((prev) => !prev);
    if (!showComments && comments.length === 0) {
      dispatch(fetchCommentsByPost(_id));
    }
  };

  return (
    <Card
      className="postCard__container"
      actions={[
        <MessageFilled
          className="postCard__icon"
          style={{ fontSize: '24px', color: '#fff' }}
          key="comment"
          onClick={handleShowComments}
        />,
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

      {showComments && (
        <div>
          <Comments comments={comments} />
        </div>
      )}
    </Card>
  );
};

export default PostCard;
