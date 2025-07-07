import './postCard.css';
import { LikeFilled, MessageFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const PostCard = ({ title, content, image, avatar }) => {
  const showImage = image && image !== '';
  return (
    <Card
      className="postCard__container"
      actions={[
        <MessageFilled className="postCard__icon" style={{ fontSize: '24px', color: '#fff' }} key="comment" />,
        <LikeFilled className="postCard__icon" style={{ fontSize: '24px' }} key="liked" />,
      ]}
    >
      <Meta
        className="postCard__meta"
        avatar={<Avatar src={avatar || 'https://api.dicebear.com/7.x/miniavs/svg?seed=8'} />}
        title={<span className="postCard__title">{title}</span>}
        description={<span className="postCard__content">{content}</span>}
      />

      {showImage && (
        <img alt={title} src={image} style={{ width: '100%', marginTop: '1rem', borderRadius: '0.5rem' }} />
      )}
    </Card>
  );
};

export default PostCard;
