import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LikeFilled, MessageFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { fetchCommentsByPost } from '../../../features/comments/commentsSlice';
import Comments from '../../comments/Comments';
import './postCard.css';

const { Meta } = Card;

const PostCard = ({ _id, title, content, image, avatar, author, comments: postComments }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);

  const commentsItems = useSelector((state) => state.comments.items);

  const comments = useMemo(() => {
    return commentsItems.filter((c) => c.post === _id);
  }, [commentsItems, _id]);

  const commentCount = Array.isArray(postComments) ? postComments.length : comments.length;

  const handleShowComments = (e) => {
    e.stopPropagation(); //
    setShowComments((prev) => !prev);
    if (!showComments && comments.length === 0) {
      dispatch(fetchCommentsByPost(_id));
    }
  };

  const handleNavigate = () => {
    navigate(`/posts/${_id}`);
  };

  return (
    <>
      <div onClick={handleNavigate} style={{ cursor: 'pointer' }}>
        <Card
          className="postCard__container"
          actions={[
            <span
              key="comment"
              onClick={handleShowComments}
              style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
            >
              <MessageFilled className="postCard__icon" style={{ fontSize: '24px', color: '#00a1e0' }} />
              {commentCount > 0 && (
                <span style={{ marginLeft: '6px', fontWeight: 'bold', color: '#00a1e0' }}>{commentCount}</span>
              )}
            </span>,
            <LikeFilled
              key="liked"
              className="postCard__icon"
              style={{ fontSize: '24px' }}
              onClick={(e) => e.stopPropagation()} // si luego quiere hacer algo con likes
            />,
          ]}
        >
          <Meta
            className="postCard__meta"
            avatar={<Avatar src={avatar || author?.image || 'https://api.dicebear.com/7.x/miniavs/svg?seed=8'} />}
            title={<span className="postCard__title">{title}</span>}
            description={<span className="postCard__content">{content}</span>}
          />
          {image && (
            <img alt={title} src={image} style={{ width: '100%', marginTop: '1rem', borderRadius: '0.5rem' }} />
          )}
        </Card>
      </div>
      {showComments && (
        <div>
          <Comments postId={_id} />
        </div>
      )}
    </>
  );
};

export default PostCard;
