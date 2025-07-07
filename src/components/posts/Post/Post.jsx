import { useSelector } from 'react-redux';
import PostCard from '../PostCard/PostCard';

const Post = () => {
  const dataPosts = useSelector((state) => state.posts.posts);
  const posts = dataPosts?.posts;

  if (!Array.isArray(posts)) {
    return <p>Cargando posts...</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  );
};

export default Post;
