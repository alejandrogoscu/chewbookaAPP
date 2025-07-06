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
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          image={Array.isArray(post.images) && post.images.length > 0 ? post.images[0] : null}
        />
      ))}
    </div>
  );
};

export default Post;
