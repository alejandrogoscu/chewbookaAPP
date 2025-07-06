import { LikeFilled, TwitchFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const PostCard = ({ title, content, image, avatar }) => {
  const showImage = image && image !== '';
  return (
    <Card
      style={{ width: 300, margin: '1rem auto' }}
      actions={[<TwitchFilled key="comment" />, <LikeFilled key="liked" />]}
    >
      <Meta
        avatar={<Avatar src={avatar || 'https://api.dicebear.com/7.x/miniavs/svg?seed=8'} />}
        title={title}
        description={content}
      />

      {showImage && (
        <img alt={title} src={image} style={{ width: '100%', marginTop: '1rem', borderRadius: '0.5rem' }} />
      )}
    </Card>
  );
};

export default PostCard;
